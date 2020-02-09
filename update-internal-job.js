const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  try {
    const result = await db.updateById(
      "internal_jobs",
      event.pathParameters.jobid,
      data
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Job updated!" + result,
        data
      })
    };
  } catch (error) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not update job",
      error
    };
  }
};
