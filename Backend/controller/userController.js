const { json } = require("express");
const { StatusCodes } = require("http-status-codes");

// const { Users } = require("../data/users.json");
const users = [
   {
      id: 1,
      name: "admin",
   },
   {
      id: 2,
      name: "raj nirala",
   },
];

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
      const userExist = users.findIndex((user) => user.id === id);
      if (userExist === -1) {
         req.status(StatusCodes.BAD_REQUEST).json({
            message: "user already exist",
            data: null,
         });
      } else {
         users.push({ id, name });
         req.status(StatusCodes.ok).json({
            id,
            name,
         });
      }
   },
   deleteUser: (req, res) => {},
};

module.exports = controllers;
