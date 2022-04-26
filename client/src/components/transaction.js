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
                        <button type="" onClick={deleteTransaction}>X</button>
                        <button type="" onClick={editTransaction}>Edit</button>
                    </td>

                </tr> 
    )
}

export default Transaction