// build your `Resource` model here
const db = require("../../data/dbConfig");

const add = async (newResource) => {
  const something = await db("resources").insert(newResource);
  console.log("something");
};
