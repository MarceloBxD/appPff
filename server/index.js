const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const sequelize = require('./models/mysql');

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

//app uses
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

sequelize
  .authenticate()
  .then(() => console.log('Connected with success!'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
