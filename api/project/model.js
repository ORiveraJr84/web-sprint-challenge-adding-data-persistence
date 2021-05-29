// build your `Project` model here
const db = require("../../data/dbConfig");

const find = async (id) => {
  const projects = await db("projects");
  projects.map((project) => {
    if (project.project_completed === 1) {
      return (project.project_completed = true);
    } else {
      return (project.project_completed = false);
    }
  });
  console.log(projects);
  return projects;
};

const add = async (newProject) => {
  const [id] = await db("projects").insert(newProject);
  const retrievedNewProject = await db("projects").where({ project_id: id });
  retrievedNewProject.map((project) => {
    if (project.project_completed === 1) {
      return (project.project_completed = true);
    } else {
      return (project.project_completed = false);
    }
  });
  return retrievedNewProject[0];
};

module.exports = {
  find,
  add,
};
