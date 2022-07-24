import React from 'react'
import Transaction from './transaction'
import { useEffect, useState } from 'react'

const Balance = () => {

// Date state

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

let balance = 0
data.map((item) => {
    return item.type === "Income" ? balance = balance + item.amount : balance = balance - item.amount
})

// Assign styles

let balanceStyle = (balance >= 0 ? 'green' : 'red')

// Delete and Session for Update

async function deleteTransaction(item) {
    await fetch(`http://localhost:3000/transactions/${item.id}`, { method: 'DELETE' })
    fetchData()
}

async function editTransaction(item) {
    sessionStorage.setItem('transactions', JSON.stringify(item));
}


// Component

    return (
        <div className='content'>
            <h1 className={balanceStyle}>	
                BALANCE: ${balance}
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
                    {data.slice(0, 10).map((item) => {
                        return <Transaction 
                            deleteTransaction={() => deleteTransaction(item)} 
                            editTransaction={() => editTransaction(item)} 
                            item={item.concept} 
                            price={item.amount} 
                            type={item.type} 
                            date={item.date.split('T')[0]} 
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