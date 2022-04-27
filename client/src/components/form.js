import React from 'react'

function Form() {
    return <div className='form-container'>
       
       <form action="" className='form'>
       <h1 className='form-heading'>ADD NEW TRANSACTION:</h1>
           <label >Transaction:</label>
           <input type="text" /> <br></br>
           <label >Amount:</label>
           <input type="text" /> <br></br>
           <label >Type:</label>
           <select name="" id="" className='select'>
             <option value="">Income</option>
             <option value="">Expenses</option>
            </select>
           <label >Date:</label>
           <input type="date"/> <br></br>
           <label >Category:</label>
           <select name="" id="" className='select'>
                <option value="">Food</option>
                <option value="">Leisure</option>
                <option value="">Bills</option>
                <option value="">Salary</option>
                <option value="">Other</option>
            </select>
           <button className='submit'>SUBMIT</button>
       </form>

    </div>
}

export default Form