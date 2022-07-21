import React from 'react'
import Transaction from './transaction'
import { useEffect, useState } from 'react'

function Balance() {

let balance = 0

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('http://localhost:3000/transactions')
        const resJson = await response.json()
        setData(resJson.payload)
    }
    fetchData()
  }, []);

  let [data, setData] = useState([]);

data.map((item) => {
   return balance = balance + item.amount
})

let balanceStyle = (balance > 0 ? 'green' : 'red')

function deleteTransaction(item) {
    console.log('Delete transaction:', item.id)
}

function editTransaction(item) {
    console.log('Edit transaction:', item.id)
}

    return (
        <div className='content'>
            <h1><span className={balanceStyle}>	
                &#128176; 	
                &#128176; 	 
                &nbsp;
                BALANCE: £{balance} &nbsp;
                &#128176; 	
                &#128176;</span>
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
                    {data.map((item, index) => {
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