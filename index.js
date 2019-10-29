const express = require("express");
const routes = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
