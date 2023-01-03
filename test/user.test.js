const { User, Trip, Vacations } = require("../models");
const { describe } = require("../models/Vacations");

describe("User", () => {
  describe("Creation", () => {
    it("should return an object", () => {
      const newUser = new User();
      expect(typeof newUser).toBe("object");
    });
    it("should have an id", () => {
      const newUser = new User();
      expect(typeof newUser.id).toBe("string");
    });
    it("should have a first name", () => {
      const newUser = new User({ first_name: "Brian" });
      const firstName = "Brian";
      expect(newUser.first_name).toBe(firstName);
    });
    it("should have a last name", () => {
      const newUser = new User({ first_name: "Brian", last_name: "Wang" });
      const lastName = "Wang";
      expect(newUser.last_name).toBe(lastName);
    });
    it("should have a user name", () => {
      const newUser = new User({
        user_name: "Brian",
        last_name: "Wang",
        user_name: "bwang",
      });
      const userName = "bwang";
      expect(newUser.user_name).toBe(userName);
    });
    it("should have an email", () => {
      const newUser = new User({
        first_name: "Brian",
        email: "btwang@gmail.com",
      });
      const email = "btwang@gmail.com";
      expect(newUser.email).toBe(email);
    });
    it("should have a password", () => {
      const newUser = new User({
        first_name: "Brian",
        password: "password12345",
      });
      const password = "password12345";
      expect(newUser.password).toBe(password);
    });
  });
  // describe("checkPassword Function", () => {
  //   it("should check the inputted password with the password that is saved", () => {
  //     const newUser = new User({
  //       user_name: "bwang",
  //       password: "password12345",
  //     });
  //     const checkUser = { password: "password12345" };
  //     expect(newUser.checkPassword(checkUser)).toBe(true);
  //   });
  // });
});
