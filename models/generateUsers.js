const mysql = require('mysql2/promise');
const Chance = require('chance');

const chance = new Chance();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'userdb'
});

const generateUsers = async (numUsers) => {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const name = chance.name();
    const email = chance.email();
    users.push([name, email]);
  }

  return users;
};

const insertUsers = async (users) => {
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    const query = 'INSERT INTO users (name, email) VALUES ?';
    await connection.query(query, [users]);

    await connection.commit();
    connection.release();
    console.log('Users inserted successfully');
  } catch (error) {
    console.error('Error inserting users:', error);
  }
};

const main = async () => {
  const users = await generateUsers(1000);
  await insertUsers(users);
  process.exit();
};

main();
