// build your `Task` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const tasks = await db("tasks as t").join(
    "projects as p",
    "t.project_id",
    "p.project_id"
  );
  tasks.map((task) => {
    if (task.task_completed === 1) {
      return (task.task_completed = true);
    } else {
      return (task.task_completed = false);
    }
  });
  console.log(tasks);
  return tasks;
};

const add = async (newTask) => {
  const [id] = await db("tasks").insert(newTask);
  console.log("This is the id ---> ", id);
  const retrievedNewTask = await db("tasks as t")
    .where({ "t.task_id": id })
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  console.log("This is the retrievedNewTask ---> ", retrievedNewTask);
  retrievedNewTask.map((task) => {
    console.log("This is the task ---> ", task);
    if (task.project_completed === 1) {
      return (task.project_completed = true), (task.task_completed = true);
    } else {
      return (task.project_completed = false), (task.task_completed = false);
    }
  });
  return retrievedNewTask[0];
};

module.exports = {
  find,
  add,
};
