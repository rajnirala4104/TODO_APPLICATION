const express = require("express");

const controllers = require("./controller/userController");

const app = express();

app.get("/", controllers.showUsers);
app.get("/user/:userName", controllers.userInfo);

module.exports = app;
