const express = require("express");
const connectDB = require("./db");
const app = express();
const cors = require("cors");

const { getGoogleAuthURL } = require("./utils/googleResponse");

require("dotenv/config");

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Welcome to backend zone !");
  res.send("Welcome to backend zone!");
});
app.get("/auth/googleAuth", async (req, res, next) => {
  try {
    const googleUser = await getGoogleUser({ code: req.query.code });
    const {
      name,
      picture: avatar,
      id: googleID,
      verified_email,
      email,
    } = googleUser;
    //   let user = await User.findOne({ googleID });
    //   if (!user) {
    //     let user = new User({
    //       name,
    //       avatar,
    //       googleID,
    //       email,
    //     });
    //     await user.save();
    //     sendTokenResponse(user, 201, "💰Teri admission ho gayi 😀!", res);
    //   } else {
    //     sendTokenResponse(user, 201, "✔ Id valid hai!", res);
    //   }
    console.log(googleUser);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

app.get("/auth", getGoogleAuthURL);
app.use(
  cors({
    origin: "http://192.168.0.198:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
