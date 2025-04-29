require('dotenv').config();
const mysql = require('mysql2');

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

const connection = mysql.createConnection({
  host: db_host,
  user: db_username,
  password: db_password,
  database: db_name
});

// Function to connect to the DB
const connectDB = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
      return;
    }
    console.log('Database connection established');
  });
};

module.exports = {
  connectDB,
  connection
};
