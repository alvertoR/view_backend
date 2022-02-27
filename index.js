const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log('Mi port' +  port);
});