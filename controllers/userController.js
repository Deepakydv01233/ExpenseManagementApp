  
const { response } = require("express");
const userModal = require("../models/userModal");

const getAllUser = async (req, res) => {
  try {
    const users = await userModal.find({ profile: "user" });
    // console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModal.findOneAndDelete({ _id: req.body.userId });
    res.status(200).send("User deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password, profile } = req.body;
    const user = await userModal.findOne({ email, password, profile });
    if (!user) {
      return res.status(404).send("user not found");
    } else if (profile === "admin") {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModal(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
module.exports = {
  loginController,
  registerController,
  getAllUser,
  deleteUser,
};
