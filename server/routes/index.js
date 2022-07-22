import express from "express";
const router = express.Router();

// Import functions
import * as functions from "../models/transactions.js"

// Get all the transactions
router.get("/transactions", async function (req, res, next) {
  const transactions = await functions.getTransactions()
  res.json({ success: true, message: 'All the transactions!', payload: transactions});
});

// Post new transaction
router.post("/transactions", async function (req, res, next) {
  const {
    concept,
    amount,
    type,
    category,
    date
  } = req.body
  const newTransaction = await functions.addTransaction(concept, amount, type, category, date)
  res.json({ success: true, message: 'Transaction added!', payload: newTransaction});
});

export default router;

// Delete transaction

router.delete("/transactions/:id", async function (req, res, next) {
  const deleteTransaction = await functions.removeTransaction(req.params.id)
  res.json({success: true, message: 'Transaction deleted!', payload: deleteTransaction})
})

// Update transaction

router.patch("/transactions/:id", async function (req, res, next) {
  const {
    concept,
    amount,
    type,
    category,
    date
  } = req.body
  const updateTransaction = await functions.updateTransaction(concept, amount, type, category, date, req.params.id)
  res.json({success: true, message: 'Transaction updated!', payload: updateTransaction})
})