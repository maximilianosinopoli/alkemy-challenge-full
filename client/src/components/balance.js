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
                        return <Transaction item={item.item} price={item.price} type={item.type} date={item.date} category={item.category} key={index} style={(item.type === 'Income' ? 'entry' : 'egress')}
                        
                        />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Balance