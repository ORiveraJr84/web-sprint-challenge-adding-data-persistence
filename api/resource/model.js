// build your `Resource` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  try {
    const something = await db("resources");
    console.log(resources);
  } catch (error) {
    return error;
  }
};

const add = async (newResource) => {
  const something = await db("resources").insert(newResource);
  console.log("something");
};

module.exports = {
  find,
  add,
};
