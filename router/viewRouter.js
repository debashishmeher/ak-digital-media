const express = require("express");
const Router = express.Router();
const viewController = require("../controller/viewController");

Router.route("/").get(viewController.home);
Router.route("/about").get(viewController.about);

module.exports = Router;
