const hapi = require("@hapi/hapi");
const connectToDb = require("./db");
const StudentPlugin = require("./lib/plugin/student/index");
const TestPlugin = require("./lib/plugin/testss/index");
const ServerPlugin = require("./lib/plugin/subjects/index");
const MarksPlugin = require("./lib/plugin/marks/index");
const AvgPlugin = require("./lib/plugin/avg/index");

const init = async () => {
  connectToDb();
  const server = hapi.Server({
    port: 3000,
    host: "localhost",
  });
  await server.register(StudentPlugin);
  await server.register(TestPlugin);
  await server.register(ServerPlugin);
  await server.register(MarksPlugin);
  await server.register(AvgPlugin);
  await server.start();
  console.log("server is listing on port 3000");
};

init();
