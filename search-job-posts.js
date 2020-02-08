const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const data = JSON.parse(event.body);

  const {
    title,
    location,
    min_salary,
    max_salary,
    permanent,
    temp,
    contract,
    full_time,
    part_time
  } = data;

  const sql = `
    SELECT *
    FROM internal_jobs
    WHERE (LOWER(title) LIKE $1 OR $1 IS NULL)
    AND (LOWER(location) LIKE $2 OR $2 IS NULL)
    AND (min_salary <= $3 OR $3 IS NULL)
    AND (max_salary >= $4 OR $4 IS NULL)
    AND (type = $5 OR $5 IS NULL)
    ORDER BY created_at DESC
  `;

  let type;
  if (permanent) {
    type = "permanent";
  } else if (temp) {
    type = "temp";
  } else if (contract) {
    type = "contract";
  } else if (full_time) {
    type = "full_time";
  } else if (part_time) {
    type = "part_time";
  } else {
    type = null;
  }

  try {
    const queryResult = await db.query(
      sql,
      title ? `%${title.toLowerCase()}%` : "%",
      location ? `%${location.toLowerCase()}%` : "%",
      min_salary ? min_salary : null,
      max_salary ? max_salary : null,
      type
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Jobs returned!",
        data: queryResult
      })
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      headers,
      body: "ERROR: Could not search for jobs: " + error
    };
  }
};
