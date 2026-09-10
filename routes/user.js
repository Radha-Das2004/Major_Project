const express = require('express');
const router = express.Router();
const User =require("../models/user");
const passport = require('passport');
const wrapAsync = require('../utilts/wrapAsync');
const { saveRedirectUrl } = require('../middleware');

// Controller
const userController = require("../controllers/user");

router.route("/signup")
      .get( userController.renderSignupForm) //New SinUp Form
      .post(wrapAsync(userController.createUser)); // Create User

router.route("/login")
      .get( userController.renderLoginForm)
      .post(
        saveRedirectUrl,
        passport.authenticate("local", {
                        failureRedirect: "/login",
                        failureFlash: true,
            }) ,
        wrapAsync( userController.loginUser))

// Logout Request
router.get("/logout",userController.logoutUser);

module.exports = router; 