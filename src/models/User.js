const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: string,
  email: string,
  password: string
});

module.exports = model("User", userSchema);
