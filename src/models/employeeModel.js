const db = require('./db');

const getEmployeeById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM mesai_takip_sistemi WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  getEmployeeById,
};
