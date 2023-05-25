// const crypto = require('crypto');
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/Users");
const { AuthService } = require("../services/auth.service");

const AuthServiceInstance = new AuthService();
const maxAge = 24 * 60 * 60;

const createSendToken = async (user, statusCode, res) => {
  let token = await AuthServiceInstance.token(user, res);
  res.status(statusCode).json({
    status: "success",
    token,
  });
};

exports.signup = async (req, res, next) => {
  let newUser = await AuthServiceInstance.signIn(req);
  createSendToken(newUser, 201, res);
};

exports.authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send(400).json({
      status: "fail",
      data: "Please provide email and password",
    });

    return next();
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.send(400).json({
      status: "fail",
      data: "Incorrect email or password",
    });

    return next();
  }

  createSendToken(user, 200, res);
};
