// data access
const { fetchUsernamesFromDB } = require("../db/usernames.db");

const fetchUsernamesService = async (year, week, since) => {
  try {
    return await fetchUsernamesFromDB(year, week, since);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  fetchUsernamesService
};
