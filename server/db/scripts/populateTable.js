import db from "../index.js";
import data from "../../data.js";

export async function insertData() {
        for (let i = 0; i < data.length; i++) {
            const concept = data[i].concept;
            const amount = data[i].amount;
            const type = data[i].type;
            const category = data[i].category
            const date = data[i].date;
            const newQuery = `INSERT INTO transactions (concept, amount, type, category, date) VALUES ($1, $2, $3, $4, $5)`;
            const queryCall = await db.query(newQuery, [concept, amount, type, category, date]);
            console.log('Query Call', queryCall)
        }
        console.log("Table populated succesfully!")
}

insertData();