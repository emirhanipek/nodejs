const mysql = require("mysql2");

// Veritabanı bağlantısı
const pool = mysql.createPool({
  host: "localhost",    // MySQL sunucu adresi
  user: "root",         // MySQL kullanıcı adı
  password: "123456789",         // MySQL şifresi
  database: "mesai_takip_sistemi", // Veritabanı adı
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promise tabanlı sorgular için
const promisePool = pool.promise();

module.exports = promisePool;
