import React from 'react'
import { Link } from 'react-router-dom'

function Transaction({item, price, category, type, date, style, deleteTransaction, editTransaction}) {

    return (
                <tr className={style}>
                    <td>{item}</td>
                    <td>{price}</td>
                    <td>{type}</td>
                    <td className='action'>{date}</td>
                    <td>{category}</td>
                    <td className='action'>
                        <button type="" onClick={deleteTransaction} className='button-transaction'>X</button>
                        <Link onClick={editTransaction} className="button-transaction" to="/update">Edit</Link>  
                    </td>
                </tr> 
    )
}       

export default Transaction