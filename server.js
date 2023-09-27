const { createServer } = require("http");
const app = require("./Backend/app");

const port = process.env.PORT || 8080;
const server = createServer(app);
server.listen(port, () => {
   console.log(`server has started at: 8080 => http://127.0.0.1:8080`);
});
