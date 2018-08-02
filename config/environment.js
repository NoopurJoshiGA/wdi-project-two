const port = process.env.PORT || 8000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/instagramUsers';

module.exports = {
  dbURI,
  port
};
