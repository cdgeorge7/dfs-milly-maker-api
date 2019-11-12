// data access
const {
  fetchUsernameDataFromDB,
  fetchUsernameListFromDB
} = require("../db/usernames.db");

const fetchUsernameDataService = (weekYear, username) => {
  try {
    return fetchUsernameDataFromDB(weekYear, username);
  } catch (e) {
    throw new Error(e.message);
  }
};

const fetchUsernameListService = (weekYear, query) => {
  try {
    return fetchUsernameListFromDB(weekYear, query);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  fetchUsernameDataService,
  fetchUsernameListService
};
