const AWS = require("aws-sdk");
AWS.config.update({ region: "us_west-2", endpoint: "http://localhost:8000" });
//AWS.config.update({ region: "us-east-2" });

const fetchUsernameDataFromDB = (weekYear, usernameQ) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  //should put this in a config file
  const table = "MillyMakerUsernames";
  const params = {
    TableName: table,
    Key: {
      week_year: weekYear,
      username_q: usernameQ
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

const fetchUsernameListFromDB = (weekYear, query) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  //should put this in a config file
  const table = "MillyMakerUsernames";
  const params = {
    TableName: table,
    ExpressionAttributeValues: {
      ":weekYear": weekYear,
      ":q": query
    },
    AttributeValueList: "username_q",
    KeyConditionExpression:
      "week_year = :weekYear AND begins_with(username_q,:q)",
    ProjectionExpression: "username"
  };

  return docClient
    .query(params, (err, data) => {
      if (err) {
        console.error(
          "Unable to read item. Error JSON: ",
          JSON.stringify(err, null, 2)
        );
      } else {
        //console.log(data);
        return data;
      }
    })
    .promise();
};

module.exports = { fetchUsernameDataFromDB, fetchUsernameListFromDB };
