const mongoose = require("mongoose");

//schema design
const userSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      required: [true, "required"],
    },
    name: {
      type: String,
      required: [true, "name is requuired"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

// export
const userModal = mongoose.model("user", userSchema);
module.exports = userModal;
