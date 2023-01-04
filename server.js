// Requires all of our packages

const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers.js");
const { join } = require("path");
const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Creates our express route and port

const app = express();
const PORT = process.env.PORT || 3001;

// Allows us to use our helpers

const hbs = exphbs.create({ helpers });

// Our session 

const sess = {
  secret: "Secret Stuff",
  cookie: {
    maxAge: 1000 * 60 * 60 * 3,
  },
  resave: false,
  saveUnitialized: false,
};

app.use(session(sess));

// Allows handlebars to run

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

// Tells us where to find routes

app.use(routes);

// Creates our sequelize connection and opens up the server

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server now open!`));
});
