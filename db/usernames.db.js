const AWS = require("aws-sdk");
AWS.config.update({ region: "us_west-2", endpoint: "http://localhost:8000" });

const fetchUsernameFromDB = (week_year, username) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const table = "MillyMakerUsernames";
  const params = {
    TableName: table,
    Key: {
      week_year: week_year,
      username: username
    }
  };

  return docClient
    .get(params, (err, data) => {
      if (err) {
        console.error(
          "Unable to read item. Error JSON: ",
          JSON.stringify(err, null, 2)
        );
      } else {
        return data;
      }
    })
    .promise();
};

module.exports = { fetchUsernameFromDB };
