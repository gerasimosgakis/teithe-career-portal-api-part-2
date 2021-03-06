const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  data.id = uuid();

  const sqlCount = `
    SELECT COUNT(*)
    FROM likes
    WHERE likes.user_id = $1
    AND likes.post_id = $2
  `;

  const sqlRemove = `
    DELETE FROM likes
    WHERE likes.user_id = $1
    AND likes.post_id = $2
  `;

  try {
    const queryResult = await db.query(sqlCount, data.user_id, data.post_id);
    try {
      const result =
        parseInt(queryResult[0].count) <= 0
          ? await db.insert("likes", data)
          : await db.query(sqlRemove, data.user_id, data.post_id);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "Likes updated!" + result,
          action: parseInt(queryResult[0].count) <= 0 ? "added" : "removed",
          data
        })
      };
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        headers,
        body: "Could not add like " + err
      };
    }
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      headers,
      body: "Could not add like " + error
    };
  }
};
