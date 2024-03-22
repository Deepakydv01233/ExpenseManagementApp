const express = require("express");
const {
  loginController,
  registerController,
  getAllUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// router

// post login

router.post("/login", loginController);

// post Register
router.post("/register", registerController);

router.post("/admin", getAllUser);

router.post("/delete-user",deleteUser)

module.exports = router;
