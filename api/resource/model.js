// build your `Resource` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const resources = await db("resources");
  return resources;
};

const add = async (newResource) => {
  const [id] = await db("resources").insert(newResource);
  return id;
};

module.exports = {
  find,
  add,
};
