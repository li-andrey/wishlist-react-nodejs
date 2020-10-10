const express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const app = express();
const port = 3100;
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

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resetToken: String,
  avatarUrl: String,
});

const User = mongoose.model("User", userSchema);

const wishListSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  status: String,
});

const WishList = mongoose.model("WishList", wishListSchema);

const wishListItemSchema = new mongoose.Schema({
  title: String,
  comment: String,
  desireDegree: Number,
  picture: String,
  reserved: Boolean,
  wishList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WishLists",
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const WishListItem = mongoose.model("WishListItem", wishListItemSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/questionnaire.html");
});

// Получение списка всех пользователей
app.get("/api/users", async function (req, res) {
  const users = await User.find({});
  res.json(users);
});

// Регистрация пользователя
app.post("/api/registration", async function (req, res) {
  const body = req.body;
  console.log(123, body);
  const user = new User({
    name: body.name,
    email: body.email,
    password: body.password,
    avatarUrl: body.avatarUrl,
  });
  const savedUser = await user.save();
  res.json(savedUser);
});

app.post("/api/sign_in/:id", function (req, res) {
  /* не пойму что здесь прописывать */
});

app.post("/api/sign_in/send_reset_password", function (req, res) {
  /* не пойму что здесь прописывать */
});

app.patch("/api/users/:id?token=%8y%", function (req, res) {
  /* не пойму что здесь прописывать */
});

// Получение списка всех WishLists
app.get("/api/wishlists", async function (req, res) {
  const wishLists = await WishList.find({});
  res.json(wishLists);
});

// Создание нового WishList
app.post("/api/wishlists", async function (req, res) {
  const body = req.body;
  const wishList = new WishList({
    owner: body.ownerId,
    status: body.status,
  });
  const savedWishList = await wishList.save();
  res.json(savedWishList);
});

app.patch("/api/wishlists/:id", function (req, res) {
  // TODO
});

app.post("/api/wishlists/:id/wishlist_item", async (request, response) => {
  // const body = request.body;
  // const wishListItem = new WishListItem({
  //   title: body.title,
  //   comment: body.comment,
  //   desireDegree: body.desireDegree,
  //   picture: body.picture,
  //   reserved: body.reserved,
  //   wishListId: {
  //     typeof: mongoose.Schema.Types.ObjectId,
  //     ref: "WishLists",
  //   },
  // });
  // wishListItem.save().then((savedWishListItem) => {
  //   response.json(savedWishListItem);
  // });
});

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
// //   const picture = req.file
// //   res.sendFile(picture)

//   // req.body will hold the text fields, if there were any
// })

app.patch("/api/update_wishlist_item/:id", async function (req, res) {
  const id = req.params.id;
  const { title, comment, desireDegree, picture, reserved } = req.body;
  const result = await WishListItem.update(
    { _id: id },
    { title, comment, desireDegree, picture, reserved }
  );
  res.send(result);
});

app.delete("/api/delete_wishlist_item/:id", async function (req, res) {
  const id = req.params.id;
  const result = await WishListItem.deleteOne({ _id: id });
  res.send(result);
});

app.patch("/api/wishlist_item/:id", async function (req, res) {
  // const id = req.params.id;
  // const { assigneeId } = req.body;
  // const result = await WishListItem.update({ _id: id }, { assigneeId });
  // res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
