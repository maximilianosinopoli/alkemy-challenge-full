import React from 'react'
import Transaction from './transaction'
import { useEffect, useState } from 'react'

const Balance = () => {

// Const's

let balance = 0
let [data, setData] = useState([]);

// Fetch data

useEffect(() => {
    fetchData()
  }, []);

async function fetchData() {
    const response = await fetch('http://localhost:3000/transactions')
    const resJson = await response.json()
    setData(resJson.payload)
}

// Balance

data.map((item) => {
   return balance = balance + item.amount
})

// Assign styles

let balanceStyle = (balance > 0 ? 'green' : 'red')

// Function add & remove

async function deleteTransaction(item) {
    console.log('Delete transaction:', item.id)
    await fetch(`http://localhost:3000/transactions/${item.id}`, { method: 'DELETE' })
    fetchData()
}

async function editTransaction(item) {
    console.log('Edit transaction:', item.id)
}

// Component

    return (
        <div className='content'>
            <h1 className={balanceStyle}>	
                BALANCE: £{balance}
            </h1>
            <table className='table'>      
                <tbody>
                <tr className='titles'>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                    {data.map((item) => {
                        return <Transaction 
                            deleteTransaction={() => deleteTransaction(item)} 
                            editTransaction={() => editTransaction(item)} 
                            item={item.concept} 
                            price={item.amount} 
                            type={item.type} 
                            date={item.date} 
                            category={item.category}
                            key={item.id} 
                            style={(item.type === 'Income' ? 'income' : 'expenses')}
                        />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Balance