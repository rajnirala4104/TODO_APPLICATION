const { StatusCodes } = require("http-status-codes");

// const { Users } = require("../data/users.json");
const users = [];

const controllers = {
   showUsers: (req, res) => {
      if (users) {
         res.status(StatusCodes.OK).json({
            message: "ok",
            data: users.length === 0 ? null : users,
         });
      }
   },
   getUseById: (req, res) => {
      const userId = parseInt(req.params.user_id);
      res.status(StatusCodes.OK).json({
         message: "ok",
         data:
            users.findIndex((user) => user.id === userId) === -1
               ? null
               : users.find((user) => user.id === userId),
      });
   },
   createUser: (req, res) => {
      const { id, name } = req.body;
      const userExist = users.find((user) => user.id === id);
      if (userExist) {
         res.status(StatusCodes.OK).json({
            message: "user already exist",
            data: null,
         });
      } else {
         users.push({ id, name });
         res.status(StatusCodes.CREATED).json({
            id,
            name,
         });
      }
   },
   deleteUser: (req, res) => {},
};

module.exports = controllers;
