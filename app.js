const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("5ebad8799d151d2fc05df41b")
    .then((user) => {
      req.user = new User(user.username, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  // const user = new User("lukasz", "lukasz@gmail.com");

  // user.save();
  app.listen(3000);
});
