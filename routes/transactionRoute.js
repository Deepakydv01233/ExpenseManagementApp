const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
  getAllTransactionAdmin,
} = require("../controllers/transactionctrl");

const router = express.Router();

router.post("/add-transaction", addTransaction);
router.post("/edit-transaction", editTransaction);
router.post("/delete-transaction", deleteTransaction);

router.post("/get-transaction", getAllTransaction);
router.post("/admin", getAllTransactionAdmin);

module.exports = router;
