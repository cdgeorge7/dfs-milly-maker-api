const express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");

const app = express();

//middleware
//app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port: ${PORT} ${process.env.NODE_ENV}`)
);
