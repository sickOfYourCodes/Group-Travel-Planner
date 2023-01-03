const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers.js");
const cors = require("cors");
const { join } = require("path");
const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Secret Stuff",
  cookie: {
    maxAge: 1000 * 60 * 60 * 3,
  },
  resave: false,
  saveUnitialized: false,
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server now open!`));
});
