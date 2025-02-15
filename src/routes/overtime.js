const express = require('express');
const router = express.Router();
const overtimeController = require('../controllers/overtimeController');


// Mesai bilgilerini kaydeder
router.post('/add', overtimeController.addOvertime);

// Mesai hesaplama ve ekleme sayfasını gösterir
router.get('/', overtimeController.renderOvertimePage);


module.exports = router;