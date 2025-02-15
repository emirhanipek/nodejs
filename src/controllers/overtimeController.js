const overtimeModel = require('../models/overtimeModel');

// Mesai hesaplama sayfasını render etmek için
const renderOvertimePage = async (req, res) => {
    try {
        const [employees] = await overtimeModel.getAllEmployees();
        res.render('mesai-hesapla', { employees });
    } catch (error) {
        res.status(500).send('Çalışanlar yüklenirken hata oluştu.');
    }
};

// Mesai bilgilerini kaydetmek için
const addOvertime = async (req, res) => {
    const { calisan_id, mesai_ucreti, tarih } = req.body;
    mesai_saati = 1;
    try {
        await overtimeModel.addOvertime(calisan_id, mesai_saati, mesai_ucreti, tarih);
        res.redirect('/add');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    renderOvertimePage,
    addOvertime,
};