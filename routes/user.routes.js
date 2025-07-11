const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.send({ msg: "Something went wrong", error: error.message });
      } else {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send({ msg: "User Registered" });
      }
    });
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
  // res.send({ msg: "User registered successfully" });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "coding");
          res.send({ msg: "Login success", token: token });
        } else {
          res.send({ msg: "Wrong credentials" });
          
        }
      });
    } else {
      res.send({ msg: "Email not registered" });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
  //

  // bcrypt.compare(password, user[0].password, function (err, result) {
  //   if (result) {
  //     const token = jwt.sign({ course: "mern" }, "coding");
  //     console.log(token);
  //     try {
  //       if (user.length > 0) {
  //         res.send({ msg: "Login success", token: token });
  //       } else {
  //         res.send({ msg: "wrong Credentials" });
  //       }
  //     } catch (error) {
  //       res.send({ msg: "Something went wrong", error: error.message });
  //     }
  //   }
  // });
});

module.exports = {
  userRouter,
};
