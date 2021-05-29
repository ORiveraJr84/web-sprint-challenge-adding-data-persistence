exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.text("project_name").required();
      tbl.text("project_description");
      tbl.boolean("project_completed").defaultTo(0);
    })
    .createTable("resource", (tbl) => {
      tbl.increments("resource_id");
      tbl.text("resource_name").required().unique();
      tbl.text("resource_description");
    })
    .createTable("task", (tbl) => {
      tbl.increments("task_id");
      tbl.text("task_description").required();
      tbl.text("task_notes");
      tbl.boolean("task_completed").defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADES");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("connector_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADES");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADES");
    });
};

exports.down = function (knex) {};
