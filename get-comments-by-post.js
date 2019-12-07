const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const sql = `
    SELECT *
    FROM comments
    WHERE comments.post_id = $1
    ORDER BY comments.created_at DESC
  `;

  try {
    const queryResult = await db.query(sql, event.pathParameters.postid);
    console.log(queryResult);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Comments returned!",
        data: queryResult
      })
    };
  } catch (error) {
    console.log(error);
  }
};
