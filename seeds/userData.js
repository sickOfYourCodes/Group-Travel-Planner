const { User } = require("../models");

const userData = [
  {
    first_name: "Henry",
    last_name: "Liang",
    email: "mxr@gmail.com",
    password: "password12345",
  },
  {
    name: "Jeannie",
    last_name: "Lee",
    email: "potastic@gmail.com",
    password: "password12345",
  },
  {
    name: "Panda",
    last_name: "Po",
    email: "panda@gmail.com",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
