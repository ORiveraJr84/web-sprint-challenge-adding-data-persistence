// build your `Task` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const tasks = await db("tasks as t").join(
    "projects as p",
    "t.project_id",
    "p.project_id"
  );
  console.log(tasks);
  return tasks;
};

const add = async (newTask) => {
  const [id] = await db("tasks").insert(newTask);
  return id;
};

module.exports = {
  find,
  add,
};
