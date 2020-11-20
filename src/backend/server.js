const express = require("express");
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
const path = require('path')
const router = express.Router();

const app = express();
const port = 3100;
const jwtSecret = 'showone production';
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
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const wishListSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: String,
});

const WishList = mongoose.model("WishList", wishListSchema);

const wishListItemSchema = new mongoose.Schema({
  picture: String,
  title: String,
  comment: String,
  desireDegree: Number,
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

let curentUserId = "5f816f038768713dd5161668"

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/questionnaire.html");
// });

// Получение списка всех пользователей
app.get("/api/users", async function (req, res) {
  const users = await User.find({});
  res.json(users);
});

// Регистрация пользователя
app.post(
  "/api/registration",
  [
    check('email', 'Некорректный email').isEmail(),
  ],
  async function (req, res) {
    try {
      console.log('Body:', req.body)
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистраци'
        })
      }
      const { name, email, password } = req.body
      const candidate = await User.findOne({ email })
      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' })
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({
        name,
        email,
        password: hashedPassword
      });
      await user.save();
      res.status(201).json({ message: 'Пользователь создан' });
    }
    catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так' })
    }
  }
)


// Вход в систему
app.post(
  "/api/login",
  [
    check('email', 'Введите корректный email').isEmail().normalizeEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистраци'
        })
      }
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
      }
      const token = jwt.sign(
        { userId: user.id },
        jwtSecret,
        { expiresIn: '1h' }
      )
      res.json({ token, userId: user.id })

    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так' })
    }
  })


// app.post("/api/sign_in/:id", function (req, res) {
//   curentUserId = req.params.id;
//   res.json({ curentUserId })
// });


// Получение списка всех WishLists
app.get("/api/wishlists", async function (req, res) {
  const wishLists = await WishList.find({}).populate('owner');
  res.json(wishLists);
});


// Создание нового WishList
app.post("/api/wishlists", async function (req, res) {
  const curentUserId = req.body.userId
  console.log(111111111, curentUserId)
  const wishList = new WishList({
    owner: curentUserId,
    status: 'b'
  });
  const savedWishList = await wishList.save();
  res.json(savedWishList);
});


// Редактирование WishList 
app.patch("/api/wishlists/:wish_list_id", async function (req, res) {
  const wishListId = req.params.wish_list_id;
  // const { ownerId, status } = req.body;
  const result = await WishList.update(
    { _id: wishListId },
    // { ownerId, status }
  );
  res.json(result);
});

// Получение списка всех WishListItem
app.get("/api/wishlist_items", async function (req, res) {
  const wishListItems = await WishListItem.find({});
  res.json(wishListItems);
});

// Получение списка всех WishListItem в определенном WishList
app.get("/api/wishlists/:wish_list_id/wishlist_item", async function (req, res) {
  const wishListId = req.params.wish_list_id;
  const wishListItems = await WishListItem.find({ wishList: wishListId });
  res.json(wishListItems);
});

//  Добавление нового WishListItem
app.post("/api/wishlists/:wish_list_id/wishlist_item", async (req, res) => {
  const body = req.body
  const wishListItem = new WishListItem({
    picture: body.picture,
    title: body.title,
    comment: body.comment,
    desireDegree: body.desireDegree,
    wishList: req.params.wish_list_id
  });
  const savedWishListItem = await wishListItem.save();
  res.json(savedWishListItem);
})

// Редактирование WishListItem
app.patch("/api/wishlists/:wish_list_id/wishlist_item/:id", async function (req, res) {
  const id = req.params.id;
  const { picture, title, comment, desireDegree } = req.body;
  const result = await WishListItem.update(
    { _id: id },
    { title, comment, desireDegree, picture }
  );
  res.send(result);
});

// Редактирование WishListItem назначение Assignee
app.patch("/api/wishlists/:wish_list_id/wishlist_item/:id/set_assignee", async function (req, res) {
  const id = req.params.id;
  const { picture, title, comment, desireDegree } = req.body;
  const assigneeId = curentUserId;
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

<<<<<<< HEAD

/* app.get('/how_it_works.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/how_it_works.html'));
}); */
=======
app.get('/how_it_works.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
>>>>>>> 9ba6e28fefb24d90b036b7f98ecd4322d1c05b09

app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
