const express = require("express");

const controllers = require("./controller/userController");

const app = express();

app.get("/api", controllers.showUsers);
app.get("/api/user/:userName", controllers.userInfo);

module.exports = app;
