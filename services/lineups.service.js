// data access
const { fetchLineupsFromDB } = require("../db/lineups.db");

const fetchLineupsService = async (year, week, since) => {
  try {
    return await fetchLineupsFromDB(year, week, since);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  fetchLineupsService
};
