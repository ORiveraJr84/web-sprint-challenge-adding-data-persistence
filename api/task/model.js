// build your `Task` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const tasks = await db("task");
  return tasks;
};

const add = async (newTask) => {
  const [id] = await db("task").insert(newTask);
  return id;
};

module.exports = {
  find,
  add,
};
