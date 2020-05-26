require('dotenv').config();

module.exports = {
  // database connection configs
  db: {
    client: 'mysql',
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || '127.0.0.1',
      database: process.env.DB_NAME || 'paypay',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'B2r18a1v22e5!',
    },
  },

  // port for server to run on
  express: {
    port: process.env.PORT || 5000,
  },
};
