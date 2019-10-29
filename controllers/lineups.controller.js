//Services
const { fetchLineupsService } = require("../services/lineups.service");

const getLineups = async (req, res, next) => {
  try {
    const lineups = await fetchLineupsService(
      req.query.year,
      req.query.week,
      req.query.since
    );
    res.json(lineups);
    next();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message }) && next(error);
  }
};

module.exports = { getLineups };
