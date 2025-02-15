const db = require('./db');

// Mesailer tablosuna veri eklemek için model fonksiyonu
const addOvertime = (calisan_id, mesai_saati, mesai_ucreti, tarih) => {
    return db.execute(
        'INSERT INTO mesailer (calisan_id, mesai_saati, mesai_ucreti, tarih) VALUES (?, ?, ?, ?)',
        [calisan_id, mesai_saati, mesai_ucreti, tarih]
    );
};

// Çalışanları almak için model fonksiyonu
const getAllEmployees = () => {
    return db.execute('SELECT id, isim, soyisim, maas, olusturulma_tarihi FROM calisanlar');
};

module.exports = {
    addOvertime,
    getAllEmployees,
};