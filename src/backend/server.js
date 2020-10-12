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

let curentUserId = "5f816f038768713dd5161668"

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resetToken: String,
  avatarUrl: String,
});

const User = mongoose.model("User", userSchema);

const wishListSchema = new mongoose.Schema({
  ownerId: {
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
  wishList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WishLists",
  },
  assigneeId: {
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
  curentUserId = req.params.id;
  res.json({ curentUserId })
});

//   /* не пойму что здесь прописывать */
// });

// app.post("/api/sign_in/send_reset_password", function (req, res) {
//   /* не пойму что здесь прописывать */
// });

// app.patch("/api/users/:id?token=%8y%", function (req, res) {
//   /* не пойму что здесь прописывать */
// });

// Получение списка всех WishLists
app.get("/api/wishlists", async function (req, res) {
  const wishLists = await WishList.find({});
  res.json(wishLists);
});


// Создание нового WishList
app.post("/api/wishlists", async function (req, res) {
  const body = req.body;
  const wishList = new WishList({
    ownerId: body.ownerId,
    status: body.status,
  });
  const savedWishList = await wishList.save();
  res.json(savedWishList);
});

// Редактирование WishList НЕ РАБОТАЕТ
app.patch("/api/wishlists/:id", async function (req, res) {
  const id = req.params.id;
  const { ownerId, status } = req.body;
  const result = await WishListItem.update(
    { _id: id },
    { ownerId, status }
  );
  res.send(result);
});

// Получение списка всех WishListItem
app.get("/api/wishlist_items", async function (req, res) {
  const wishListItems = await WishListItem.find({});
  res.json(wishListItems);
});

//  Создание нового WishListItem
app.post("/api/wishlists/:wish_list_id/wishlist_item", async (req, res) => {
  const body = req.body
  const wishListItem = new WishListItem({
    title: body.title,
    comment: body.comment,
    desireDegree: body.desireDegree,
    picture: body.picture,
    wishList: req.params.wish_list_id
  });
  const savedWishListItem = await wishListItem.save();
  res.json(savedWishListItem);
})

// Редактирование WishListItem
app.patch("/api/wishlists/:wish_list_id/wishlist_item/:id", async function (req, res) {
  const id = req.params.id;
  const { title, comment, desireDegree, picture, assigneeId } = req.body;
  const result = await WishListItem.update(
    { _id: id },
    { title, comment, desireDegree, picture, assigneeId }
  );
  res.send(result);
});

// Удаление WishListItem
app.delete("/api/wishlists/:wish_list_id/wishlist_item/:id", async function (req, res) {
  const id = req.params.id;
  const result = await WishListItem.deleteOne({ _id: id });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
