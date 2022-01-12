const express = require("express");
const { pool } = require("./db");
const path = require("path");
const { upload } = require("./upload");
const { generateUrl,removeAllAudios } = require("./utils");
const listEndpoints = require('express-list-endpoints');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors())

app.use("/audio", express.static(path.join(__dirname, "/public/audio")));
app.use("/thumbnail", express.static(__dirname + "/public/thumbnail"));

app.get("/all-audios", (req, res) => {
  let sql = "call get_all_audios()";
  pool.query(sql, [], (err, result) => {
    if (err) {
      res.status(400).send({ Msg: "Invalid data" })
    } else {
      res.status(200).send(result[0]);
    }
  });

});

app.post(
  "/add-new-audio",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  (req, res) => {
    const { audio, thumbnail } = req.files;
    const { title, artistName, gender } = req.body;

    const audioUrl = generateUrl(audio[0], "audio");
    const thumbnailUrl = generateUrl(thumbnail[0], "thumbnail");
    console.log(audioUrl);
    console.log(thumbnailUrl);
    let sql = "call add_new_audio(?,?,?,?,?)";
    let data = [title, artistName, audioUrl, thumbnailUrl, gender];
    pool.query(sql, data, (err, result) => {
      if (err) {
        res.status(400).send({ Msg: "Invalid data" })
      } else {
        res.status(200).send(result[0][0]);
      }
    });
  }
);


app.get('/remove-all', (req, res) => {
  let sql = "call removeAllAudios()";
  pool.query(sql, [], async (err, result) => {
    if (err) {
      res.status(400).send({ Msg: "Invalid data" })
    } else {
      let status = await removeAllAudios();
      if(status){
        res.status(200).send(result[0]);
      }else{
        res.status(500).send({Msg : "Unable to clear audios"});
      }
    }
  });  
})


const endpoints = listEndpoints(app)
endpoints.forEach(item => console.log(`http://localhost:${PORT}${item.path}`,))

app.listen(PORT, () => {
  console.log("server is running at http://localhost:" + PORT);
});
