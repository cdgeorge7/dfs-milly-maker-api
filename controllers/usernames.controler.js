//Services
const { fetchUsernamesService } = require("../services/usernames.service");

const getUsernames = async (req, res, next) => {
  try {
    const usernames = await fetchUsernamesService(
      req.query.year,
      req.query.week,
      req.query.since
    );
    res.json(usernames);
    next();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message }) && next(error);
  }
};

module.exports = { getUsernames };
