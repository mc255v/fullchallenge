const fs = require("fs");
const config = require("../config");
const knex = require("knex")(config.db);

(async () => {
  try {
    const data = JSON.parse(
      fs.readFileSync(__dirname + "/data.json")
    );
    for (const feedback of data.feedback) {
      const result = await knex("employee_feedback").insert(feedback);
      console.log(result);
    }
    process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
