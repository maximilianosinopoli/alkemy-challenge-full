import express from "express";
const router = express.Router();

// Import functions
import * as test from "../models/transactions.js"

// Get all the transactions
router.get("/transactions", async function (req, res, next) {
  const transactions = await test.getTransactions()
  res.json({ success: true, message: 'All the transactions', payload: transactions});
});

export default router;
