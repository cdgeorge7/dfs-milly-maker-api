//Services
const {
  fetchUsernameDataService,
  fetchUsernameListService
} = require("../services/usernames.service");

const getUsernameData = (req, res, next) => {
  fetchUsernameDataService(
    req.query.week + "_" + req.query.year,
    req.params.username.toLowerCase()
  )
    .then(data => {
      //console.log(data);
      res.json(data.Item);
      next();
    })
    .catch(e => {
      console.log(e.message);
      res.status(500).json({ error: e.message }) && next(e);
    });
};

const getUsernameList = (req, res, next) => {
  fetchUsernameListService(req.params.weekYear, req.query.q)
    .then(data => {
      res.json(data.Items);
      next();
    })
    .catch(e => {
      console.log(e.message);
      res.status(500).json({ error: e.message }) && next(e);
    });
};

module.exports = { getUsernameData, getUsernameList };
