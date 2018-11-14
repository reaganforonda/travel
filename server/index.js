// Required
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

const {SERVER_PORT} = process.env;


// ##### ENDPOINTS ######

app.listen(SERVER_PORT, () => {
  console.log(`Creeping on Port: ${SERVER_PORT}`);
});