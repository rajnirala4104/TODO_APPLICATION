const statusCode = require("http-status-codes");

const { Users } = require("../data/users.json");

const controllers = {
   showUsers: (req, res) => {
      res.status(statusCode.OK).json({
         message: "Welcome to TODO-WEB-APPLICATION",
         user: Users,
      });
   },

   userInfo: (req, res) => {
      console.log(req.params);

      res.status(statusCode.OK).json({
         user: {
            name: req.params.userName,
            tasks: [],
         },
      });
   },
};

module.exports = controllers;
