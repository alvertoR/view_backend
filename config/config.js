require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtLogin: process.env.JWT_LOGIN,
  jwtPassword: process.env.JWT_MAIL,
  firebase: {
    apiKey:process.env.FR_APIKEY,
    authDomain:process.env.FR_AUTHDOMAIN,
    projectId:process.env.FR_PROJECTID,
    storageBucket:process.env.FR_BUCKET,
    messagingSenderId:process.env.FR_SENDERID,
    appId:process.env.FR_APP_ID
  }
}

module.exports = { config };