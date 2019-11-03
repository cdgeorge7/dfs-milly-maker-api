const express = require("express");
require("dotenv").config();

const routes = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port: ${PORT} ${process.env.NODE_ENV}`)
);
