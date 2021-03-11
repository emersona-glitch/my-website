require('dotenv').config();

const myEmail = process.env.SECRET_EMAIL
const clientId = process.env.SECRET_CLIENT_ID;
const clientSecret = process.env.SECRET_CLIENT_SECRET;
const refreshToken = process.env.SECRET_REFRESH_TOKEN;

const auth = {
  type: 'oauth2',
  user: myEmail,
  clientId: clientId,
  clientSecret: clientSecret,
  refreshToken: refreshToken
};

module.exports = auth;