const express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3100
app.use(express.json());
const mongoose = require("mongoose");
const url = `mongodb+srv://new:asdw34vD@cluster0.any1t.mongodb.net/test?retryWrites=true&w=majority`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const wishSchema = new mongoose.Schema({
  title: String,
  comment: String,
  desireDegree: Number,
});

const Wish = mongoose.model("Wish", wishSchema);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post("/api2/addWish", async (request, response) => {
  const body = request.body;
  const wish = new Wish({
    title: body.title,
    comment: body.comment,
    desireDegree: body.desireDegree,
  });
  wish.save().then((savedWish) => {
    response.json(savedWish);
  })
})

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
// //   const picture = req.file
// //   res.sendFile(picture)

//   // req.body will hold the text fields, if there were any
// })


app.patch('/api2/updateWish/:id', async function (req, res) {
  const id = req.params.id
  const { title, comment, desireDegree } = req.body
  const result = await Wish.update({ _id: id }, { title, comment, desireDegree })
  res.send(result)
})

app.delete('/api2/deleteWish/:id', async function (req, res) {
  const id = req.params.id
  const result = await Wish.deleteOne({ _id: id })
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
