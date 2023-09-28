const express = require("express");

const controllers = require("./controller/userController");

const app = express();

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
});

app.get("/api", controllers.showUsers);
app.get("/api/user/:userName", controllers.userInfo);

module.exports = app;
