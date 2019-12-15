// const db = require("./db_connect");

// module.exports.main = async event => {
//   const headers = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": true
//   };
//   const data = JSON.parse(event.body);
//   const {
//     name,
//     handle,
//     company,
//     status,
//     skills,
//     githubusername,
//     current,
//     graduate_date_before,
//     graduate_date_after,
//     school,
//     degree
//   } = data;

//   const sql = `
//       SELECT DISTINCT profiles.id,
//       profiles.name,
//       profiles.handle,
//       profiles.avatar,
//       profiles.company,
//       profiles.website,
//       profiles.location,
//       profiles.status,
//       profiles.bio,
//       profiles.githubusername,
//       profiles.linkedin,
//       profiles.skills
//       FROM profiles, educations
//       WHERE profiles.id = educations.user_id
//       AND (LOWER(profiles.name) LIKE $1 OR $1 IS NULL)
//       AND (LOWER(profiles.handle) LIKE $2 OR $2 IS NULL)
//       AND (LOWER(profiles.company) LIKE $3 OR $3 IS NULL)
//       AND (LOWER(profiles.status) LIKE $4 OR $4 IS NULL)
//       AND (LOWER(profiles.skills) LIKE $5 OR $5 IS NULL)
//       AND (LOWER(profiles.githubusername) LIKE $6 OR $6 IS NULL)
//       AND (educations.current = $7 OR $7 IS NULL)
//       AND (educations.end_date <= $8 OR $8 IS NULL)
//       AND (educations.end_date >= $9 OR $9 IS NULL)
//       AND (LOWER(educations.school) LIKE $10 OR $10 IS NULL)
//       AND (LOWER(educations.degree) LIKE $11 OR $11 IS NULL)
//       ORDER BY profiles.id
//     `;

//   try {
//     const result = await db.query(
//       sql,
//       name ? `%${name}%` : null,
//       handle ? `%${handle}%` : null,
//       company ? `%${company}%` : null,
//       status ? `%${status}%` : null,
//       skills ? `%${skills}%` : null,
//       githubusername ? `%${githubusername}%` : null,
//       current,
//       graduate_date_before,
//       graduate_date_after,
//       school ? `%${school.toLowerCase()}%` : null,
//       degree ? `%${degree}%` : null
//     );
//     return {
//       statusCode: 200,
//       headers,
//       body: JSON.stringify(result)
//     };
//   } catch (e) {
//     return {
//       statusCode: e.statusCode || 500,
//       headers,
//       body: "ERROR: Could not find users: " + e
//     };
//   }
// };

const db = require("./db_connect");
const uuid = require("uuid/v1");

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

  console.log({
    title: title ? `%${title}%` : "%",
    location: location ? `%${location}%` : "%",
    min_salary: min_salary ? min_salary : null,
    max_salary: max_salary ? max_salary : null,
    type: permanent ? "permanent" : null,
    type: temp ? "temp" : null,
    type: contract ? "contract" : null,
    type: full_time ? "full_time" : null,
    type: part_time ? "part_time" : null
  });

  const sql = `
    SELECT *
    FROM internal_jobs
    WHERE LOWER(title) LIKE $1
    AND LOWER(location) LIKE $2
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
    type = "comtract";
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
      title ? `%${title}%` : "%",
      location ? `%${location}%` : "%",
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
