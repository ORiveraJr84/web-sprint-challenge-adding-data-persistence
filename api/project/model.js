// build your `Project` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const projects = await db("projects");
  return projects;
};

const add = async (newProject) => {
  const [id] = await db("projects").insert(newProject);
  return id;
};

module.exports = {
  find,
  add,
};
