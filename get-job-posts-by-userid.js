const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const sql = `
    SELECT *
    FROM internal_jobs
    WHERE user_id = $1
    ORDER BY created_at DESC
  `;

  try {
    const queryResult = await db.query(sql, event.pathParameters.userid);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Jobs returned!",
        data: queryResult
      })
    };
  } catch (error) {
    console.log(error);
  }
};
