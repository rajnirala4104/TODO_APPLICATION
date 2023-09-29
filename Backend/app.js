const express = require("express");

const controllers = require("./controller/userController");

const app = express();

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
   );
   res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});

app.get("/api/users", controllers.showUsers);
app.get("/api/user/:user_id", controllers.getUseById);

module.exports = app;
