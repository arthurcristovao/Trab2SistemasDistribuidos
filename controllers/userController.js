const pool = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.render('users', { users: rows });
  } catch (err) {
    res.status(500).send('Database error');
  }
};

module.exports = { getUsers };
