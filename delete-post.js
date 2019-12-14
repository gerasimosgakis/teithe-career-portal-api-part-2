const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const sql1 = "DELETE from posts where id = $1";
  const sql2 = "DELETE from likes where post_id = $1";
  const sql3 = "DELETE from comments where post_id = $1";
  try {
    const result = await db.query(sql1, event.pathParameters.id); // Delete post
    await db.query(sql2, event.pathParameters.id); // Delete associated likes
    await db.query(sql3, event.pathParameters.id); // Delete associated likes
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Post deleted!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: Could not delete post: " + e
    };
  }
};
