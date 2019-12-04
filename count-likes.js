const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  const { postId } = data;

  const sql = `
      SELECT COUNT(*) FROM 
    `;

  try {
    const result = await db.query(
      sql,
      name ? `%${name}%` : null,
      handle ? `%${handle}%` : null,
      company ? `%${company}%` : null,
      status ? `%${status}%` : null,
      skills ? `%${skills}%` : null,
      githubusername ? `%${githubusername}%` : null,
      current,
      graduate_date_before,
      graduate_date_after,
      school ? `%${school.toLowerCase()}%` : null,
      degree ? `%${degree}%` : null
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: Could not find users: " + e
    };
  }
};
