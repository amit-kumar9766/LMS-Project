const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");
const middleware = require('../utils/auth')

exports.signUp = async () => {
  let { name, email, password, passwordConfirmation } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(422).json("user already exits");
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt); //does it returns promise?
      await user.save(); //-->do I have to write special catch functions for all?
    }
  } catch (err) {
    console.log(err);
  }
};

exports.logIn =async () => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({});
    } else {
      const match = await bcrypt.compare(password, user.password); //should i use try catch here as well?
      if (match) {
        let access_token = createJWT(user.email, user._id, 3600);
        res.status(200).json({ token: access_token });
      }
    }
    //   try {
    //     var decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
    //     if (decoded) {
    //       return res.status(200).json({
    //         success: true,
    //         token: access_token,
    //         message: user,
    //       });
    //     }
    //   } catch (err) {
    //     res.status(500).json({ erros: err });
    //   }
  } catch (err) {
    console.log(err);
  }
};

