//Services
const { fetchUsernameService } = require("../services/usernames.service");

const getUsername = (req, res, next) => {
  fetchUsernameService(
    req.query.week + "_" + req.query.year,
    req.params.username
  )
    .then(data => {
      //console.log(data);
      res.json(data.Item);
      next();
    })
    .catch(e => {
      console.log(e.message);
      res.status(500).json({ error: e.message }) && next(error);
    });
};

module.exports = { getUsername };
