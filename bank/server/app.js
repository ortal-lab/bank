const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/router");
const app = express();
let mongoUtil = require("./db");

 mongoUtil.connectToServer()
 let db = mongoUtil.getDb();

 console.log("bankdb", db);
//get
app.use(cors());
app.use(bodyParser.json());
app.use("/",router);


app.listen(8000, () => {
  console.log("works");
});
