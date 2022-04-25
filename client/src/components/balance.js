import React from 'react'
import data from '../data'

const last10 = data.slice(0,10)

function Balance({balance}) {
    return (
        <div className='content'>
            <h1>Balance: {balance}</h1>
            {last10.map((item, index) => {
         return <p key={index}>{item.item}</p>
       })}
        </div>
    )
}

export default Balance