const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 100;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));


// EJS Ayarları
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));



// Rotalar
const overtimeRoutes = require('./src/routes/overtime');
app.use('/mesai', overtimeRoutes);
const calisanlarRouter = require("./src/routes/calisanlar");
app.use("/calisanlar", calisanlarRouter);


// Anasayfa
app.get("/", (req, res) => {
  res.render("home"); // src/views/home.ejs
});


// Sunucuyu Başlat
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
