const express = require("express");
const router = express.Router();
const db = require("../models/db");


// Çalışan Listesi
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM calisanlar");
    res.render("calisanlar", { calisanlar: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Bir hata oluştu.");
  }
});

// Çalışan Ekleme
router.post("/ekle", async (req, res) => {
  const { isim, soyisim, maas } = req.body;
  try {
    await db.query(
      "INSERT INTO calisanlar (isim, soyisim, maas) VALUES (?, ?, ?)",
      [isim, soyisim, maas]
    );
    res.redirect("/calisanlar");
  } catch (err) {
    console.error(err);
    res.status(500).send("Çalışan eklenirken bir hata oluştu.");
  }
});

// Mesai hesaplama route'u
router.post('/mesai-hesapla', (req, res) => {
  const { baslangic, bitis, calisanId } = req.body;
  
  // Saat formatına dönüştürülmesi
  const start = new Date(`1970-01-01T${baslangic}:00Z`);
  const end = new Date(`1970-01-01T${bitis}:00Z`);
  
  const diff = (end - start) / 1000 / 60 / 60; // Farkı saat olarak hesapla

  // Mesai bilgilerini çalışanla ilişkilendir
  // Veritabanına kaydetme işlemi
  // Örneğin MongoDB kullanıyorsanız şu şekilde çalışanın mesai bilgisini kaydedebilirsiniz:
  // await Calisan.updateOne({ _id: calisanId }, { $set: { mesai: diff } });

  res.render('mesaiSonuc', { mesaiSaati: diff });
});

module.exports = router;
