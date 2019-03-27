const { express } = require("../../lib");

const auth = express.Router();

const verify = (req, res, next) => {
  if (req)
  if (!req.body || !req.body.email || req.body.password || !req.body.ueername) {
    // ...
  } else {
    const user = req.body
  }
}

auth.get("/login", verify, (req, res) => {
  res.render("login");
});

module.exports = auth;