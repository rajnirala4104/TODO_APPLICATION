const statusCode = require("http-status-codes");

const { Users } = require("../data/users.json");

const controllers = {
   showUsers: (req, res) => {
      res.status(statusCode.OK).json({
         message: "Welcome to TODO-WEB-APPLICATION",
         user: Object.keys(Users),
      });
   },

   userInfo: (req, res) => {
      for (const userName of Object.keys(Users)) {
         if (req.params.userName === userName) {
            return res.status(statusCode.OK).json({
               userInfos: {
                  name: req.params.userName,
                  task: Users[userName],
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
