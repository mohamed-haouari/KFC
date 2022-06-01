const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const products = require('./routes/products');
const {connectDatabase} = require('./config/config');

connectDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', products)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
