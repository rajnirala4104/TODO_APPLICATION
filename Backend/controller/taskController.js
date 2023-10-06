const { StatusCodes } = require("http-status-codes");
const tasks = [
   {
      id: 1,
      taskTitle: "I have to work on minor project",
      isDone: false,
   },
];

const taskController = {
   showTask: (req, res) => {
      if (tasks) {
         res.status(StatusCodes.OK).json({
            message: "All The Tasks",
            data: tasks.length === 0 ? null : tasks,
         });
      }
   },
   getTaskById: (req, res) => {},
   addTask: () => {},
   deleteTask: () => {},
};

module.exports = { taskController };
