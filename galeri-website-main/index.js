// * MODULE
const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const cors = require('cors')
const port = process.env.PORT || 3000

// * SETTING
const app = express();
const router = express.Router();


// * PARSER
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(cors())
// * -------------------------------------------------------------------------------


app.get('/', (req,res) => {
  const json = {
    "name": "bambang"
  }
  res.send(json)

})




// * BACA & TULIS DATA
// * -------------------------------------------------------------------------------
app.post("/ulasan", (req, res) => {
  const ulasan = req.body;
  fs.readFile("ulasan.json", "utf-8", (err, data) => {
    const json = JSON.parse(data);
    json.push(ulasan);

    const text = JSON.stringify(json, null, 2);
    console.log(data);
    // console.log(json);
    fs.writeFile("ulasan.json", text, (err) => {
      if (err) {
        throw err;
      }
    });

    res.send(json);
  });
});
// * -------------------------------------------------------------------------------


// * PENGAMBILAN DATA SAAT LOAD
// * -------------------------------------------------------------------------------
app.get("/ulasan", (req, res) => {
  fs.readFile("ulasan.json", "utf-8", (err, data) => {
    const json = JSON.parse(data);

    res.send(json);
  });
});
// * -------------------------------------------------------------------------------

// app.use('/', router)

// * PENGATURAN PORT
// * -------------------------------------------------------------------------------
app.listen(port, () => console.log(`Listening on port ${port}!`)); //*||
// * -------------------------------------------------------------------------------