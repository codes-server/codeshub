const { app } = require("./lib")
const port = process.env.PORT || "5000";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var user = null;
  res.render("welcome", {
    user
  });
});

const { auth } = require("./src/routers");

// app.use("/auth", auth);
// soon ...

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
