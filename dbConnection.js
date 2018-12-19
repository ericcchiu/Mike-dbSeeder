const { Pool } = require("pg");

const pool = new Pool({
  database: "projects"
});

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      console.log("executed query", { text, duration });
      callback(err, res);
    });
  }
};
