const express = require("express");
const authenticate = require("../middlewares/authenticate");
const userController = require("../controller/userController");

const router = express.Router();
router.get("/user", authenticate.protect, userController.getUser);
router.post(
  "/follow/:id",
  authenticate.protect,
  userController.addFollowing,
  userController.follow
);
router.post(
  "/unfollow/:id",
  authenticate.protect,
  userController.removeFollowing,
  userController.unfollow
);

module.exports = router;
