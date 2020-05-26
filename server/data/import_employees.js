const fs = require("fs");
const config = require("../config");
const knex = require("knex")(config.db);

(async () => {
  try {
    const data = JSON.parse(
      fs.readFileSync(__dirname + "/data.json")
    );
    for (const employee of data.employees) {
      const result = await knex("employees").insert(employee);
      console.log(result);
    }
    process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
