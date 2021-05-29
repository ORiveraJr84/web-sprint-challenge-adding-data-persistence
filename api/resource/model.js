// build your `Resource` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const resources = await db("resource");
  return resources;
};

const add = async (newResource) => {
  const [id] = await db("resource").insert(newResource);
  return id;
};

module.exports = {
  find,
  add,
};
