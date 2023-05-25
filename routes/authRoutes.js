const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/authenticate", authController.authenticate);

module.exports = router;
