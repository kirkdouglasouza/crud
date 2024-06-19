require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT || "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "crud-node",
  define: {
    timestamp: true,
    underscored: true,
  },
};
