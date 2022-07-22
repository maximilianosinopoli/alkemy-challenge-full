import React from 'react'

function Transaction({item, price, category, type, date, style, deleteTransaction, editTransaction}) {

    return (
                <tr className={style}>
                    <td>{item}</td>
                    <td>{price}</td>
                    <td>{type}</td>
                    <td>{date}</td>
                    <td>{category}</td>
                    <td>
                        <button type="" onClick={deleteTransaction} className='button'>X</button>
                        <button type="" onClick={editTransaction} className='button'>Edit</button>
                    </td>
                </tr> 
    )
}

export default Transaction