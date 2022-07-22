import React from 'react'
import { useState } from 'react'

function Form() {

    const [conceptValue, setConceptValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [typeValue, setTypeValue] = useState('Income');
    const [categoryValue, setCategoryValue] = useState('Food');
    const [dateValue, setDateValue] = useState('');

    const updateConcept = (e) => setConceptValue(e.target.value)
    const updateAmount = (e) => setAmountValue(e.target.value)
    const updateType = (e) => setTypeValue(e.target.value)
    const updateCategory = (e) => setCategoryValue(e.target.value)
    const updateDate = (e) => setDateValue(e.target.value)

    const addNewTransaction = (e) => {
        e.preventDefault()
        const newTransaction = {
            concept: conceptValue,
            amount: amountValue,
            type: typeValue,
            category: categoryValue,
            date: dateValue
        }
        
        fetch("http://localhost:3000/transactions",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newTransaction)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }

    return <div className='form-container'>
       
       <form action="" className='form'>
       <h1 className='form-heading'>ADD NEW TRANSACTION:</h1>
           <label >Transaction:</label>
           <input type="text" onChange={updateConcept} value={conceptValue} required/> <br></br>
           <label >Amount:</label>
           <input type="text" onChange={updateAmount} value={amountValue} required/> <br></br>
           <label >Type:</label>
           <select name="" id="" className='select' onChange={updateType} value={typeValue} required>
             <option value="Income">Income</option>
             <option value="Expenses">Expenses</option>
            </select>
           <label >Date:</label>
           <input type="date" onChange={updateDate} value={dateValue} required/> <br></br>
           <label >Category:</label>
           <select name="" id="" className='select' onChange={updateCategory} value={categoryValue} required>
                <option value="Food">Food</option>
                <option value="Leisure">Leisure</option>
                <option value="Bills">Bills</option>
                <option value="Salary">Salary</option>
                <option value="Other">Other</option>
            </select>
           <button className='submit' onClick={addNewTransaction}>SUBMIT</button>
       </form>

    </div>
}

export default Form