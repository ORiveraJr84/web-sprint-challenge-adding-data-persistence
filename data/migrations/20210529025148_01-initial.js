
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments("project_id")
      tbl.text("project_name").required()
      tbl.text("project_description")
      tbl.boolean("project_completed").defaultTo(0)
  })
  .createTable("resource", tbl => {
      tbl.increments("resource_id")
      tbl.text("resource_name").required().unique()
      tbl.text("resource_description")
  })
};

exports.down = function(knex) {
  
};
