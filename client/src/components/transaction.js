import React from 'react'

function Transaction({item, price, category, type, date, style}) {

    return (
                <tr className={style}>
                    <td>{item}</td>
                    <td>{price}</td>
                    <td>{type}</td>
                    <td>{date}</td>
                    <td>{category}</td>
                    <td><button type="">X</button><button type="">Edit</button></td>

                </tr> 
    )
}

export default Transaction