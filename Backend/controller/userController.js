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
      for (const userName of Users) {
         if (req.params.userName === userName) {
            return res.status(statusCode.OK).json({
               userInfos: {
                  name: req.params.userName,
                  tasks: null,
               },
            });
         }
      }
      return res.json({
         message: "Oops!!",
         data: null,
      });
   },
};

module.exports = controllers;
