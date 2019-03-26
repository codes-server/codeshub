const express = require("express");
const app = express();
const port = process.env.PORT || "5000";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var user = null;
  res.render("welcome", {
    user
  });
});


app.listen(port, function () {
  console.log(`listening on ${port}`);
});
