const PORT = process.env.PORT || 8000;
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/instagramUsers';

module.exports = {
  DB_URI,
  PORT
};
