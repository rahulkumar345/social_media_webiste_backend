const jwt = require("jsonwebtoken");
const User = require("./../models/Users");
const maxAge = 24 * 60 * 60;
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};
class AuthService {
  token = async (user, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
      expires: new Date(Date.now() + maxAge * 1000),
      httpOnly: true,
    };

    res.cookie("jwt", token, cookieOptions);

    user.password = undefined;
    return token;
  };
  signIn = async (req) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    return newUser;
  };
}
module.exports = {
  AuthService,
};
