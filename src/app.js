const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const pug = require("pug");
const path = require("path");
const cookieParser = require("cookie-parser");
const viewRouter = require("../router/viewRouter");

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use("/", viewRouter);
// serving static file
app.use(express.static(path.join(__dirname, "../public")));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server listening at port no http://localhost:${process.env.PORT}`);
});
