import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Update() {

    let obj = JSON.parse(sessionStorage.getItem('transactions'));
    let transactionDate = obj.date.split('T')

    const [conceptValue, setConceptValue] = useState(obj.concept)
    const [amountValue, setAmountValue] = useState(obj.amount)
    const [categoryValue, setCategoryValue] = useState(obj.category)
    const [dateValue, setDateValue] = useState(transactionDate[0])

    const updateConcept = (e) => setConceptValue(e.target.value)
    const updateAmount = (e) => setAmountValue(e.target.value)
    const updateCategory = (e) => setCategoryValue(e.target.value)
    const updateDate = (e) => setDateValue(e.target.value)

    const body = {
        concept: conceptValue,
        amount: amountValue,
        category: categoryValue,
        type: obj.type,
        date: dateValue
    }

    function updateValue() {
        fetch(`http://localhost:3000/transactions/${obj.id}`, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className='form-container'>
            <form className='form'>
            <h1 className='form-heading'>EDIT TRANSACTION:</h1>
                <label >Concept</label><br></br>
                <input type="text" name="" value={conceptValue} onChange={updateConcept}></input><br></br>
                <label >Amount</label><br></br>
                <input type="text" name="" value={amountValue} onChange={updateAmount}></input><br></br>
                <label >Date:</label><br></br>
                <input type="date" onChange={updateDate} value={dateValue} required /> <br></br>
                <label >Category:</label><br></br>
                <select name="" id="" className='select' onChange={updateCategory} value={categoryValue} required>
                    <option value="Food">Food</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Bills">Bills</option>
                    <option value="Salary">Salary</option>
                    <option value="Other">Other</option>
                </select><br></br>
                <Link onClick={updateValue} className="button-transaction" to="/">Edit</Link>
            </form>
        </div>
    )
}

export default Update
