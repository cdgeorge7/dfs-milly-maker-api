// data access
const { fetchUsernameFromDB } = require("../db/usernames.db");

const fetchUsernameService = (week_year, username) => {
  try {
    return fetchUsernameFromDB(week_year, username);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  fetchUsernameService
};
