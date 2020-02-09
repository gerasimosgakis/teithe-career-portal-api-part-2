const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  data.id = uuid();
  data.created_at = Date.now();

  try {
    const result = await db.insert("comments", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Comment added!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not add comment " + e
    };
  }
};
