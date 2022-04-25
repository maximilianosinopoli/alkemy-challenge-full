import React from 'react'

function Balance({balance, test}) {
    return (
        <div className={test}>
            <h1>Balance: {balance}</h1>
        </div>
    )
}

export default Balance