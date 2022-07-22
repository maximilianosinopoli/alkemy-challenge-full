import db from "../db/index.js";

// Get all the transactions

export async function getTransactions() {
    const data = await db.query(`SELECT * FROM transactions`);
    return data.rows;
}

// Add new transactions

export async function addTransaction(concept, amount, type, category, date) {
    const data = await db.query(`INSERT INTO transactions (concept, amount, type, category, date) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [concept, amount, type, category, date]);
    return data.rows;
}

// Remove transaction

export async function removeTransaction(id) {
    const data = await db.query(`DELETE FROM transactions WHERE id = $1 RETURNING *;`, [id])
    return data.rows
}

// Update transaction

export async function updateTransaction(concept, amount, type, category, date, id) {
    const data = await db.query(`UPDATE transactions SET concept = $1, amount = $2, type = $3, category = $4, date = $5 WHERE id = ${id} RETURNING *;`, [concept, amount, type, category, date]
    );
    return data.rows
}

