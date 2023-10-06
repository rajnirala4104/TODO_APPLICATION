const express = require("express");

const controllers = require("./controller/userController");
const { taskController } = require("./controller/taskController");

const app = express();

app.use(express.json());

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

// ------------- users ------------
app.get("/api/users", controllers.showUsers);
app.get("/api/user/:user_id", controllers.getUseById);
app.post("/api/users", controllers.createUser);

// ----------------- task -------------
app.get("/api/tasks", taskController.showTask);
module.exports = app;
