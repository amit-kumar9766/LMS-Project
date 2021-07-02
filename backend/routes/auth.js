const express = require("express");
const middleware = require("../utils/auth");
const router = express.Router();
const { signUp, logIn } = require("../controllers/auth");

router.post("/signup",  signUp);
router.post("/signin", logIn);

module.exports = router;
