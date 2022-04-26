import React from 'react'
import data from '../data'
import Transaction from './transaction'

function Balance() {

const last10 = data.slice(0, 10)
let balance = 0

last10.map((item) => {
   return balance = balance + item.price
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
                    {last10.map((item, index) => {
                        return <Transaction 
                            deleteTransaction={() => deleteTransaction(item)} 
                            editTransaction={() => editTransaction(item)} 
                            item={item.item} 
                            price={item.price} 
                            type={item.type} 
                            date={item.date} 
                            category={item.category} 
                            key={item.id} 
                            style={(item.type === 'Income' ? 'entry' : 'egress')}
                        />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Balance