import React from 'react'

function Form() {
    return <div className='form-container'>
       
       <form action="" className='form'>
       <h1 className='form-heading'>ADD NEW TRANSACTION:</h1>
           <label for="">Transaction:</label>
           <input type="text" /> <br></br>
           <label for="">Amount:</label>
           <input type="text" /> <br></br>
           <label for="">Type:</label>
           <select name="" id="" className='select'>
                <option value="volvo">Income</option>
                <option value="saab">Expenses</option>
            </select>
           <label for="">Date:</label>
           <input type="date"/> <br></br>
           <label for="">Category:</label>
           <select name="" id="" className='select'>
                <option value="volvo">Food</option>
                <option value="saab">Leisure</option>
                <option value="mercedes">Bills</option>
                <option value="audi">Salary</option>
                <option value="audi">Other</option>
            </select>
           <button>SUBMIT</button>
       </form>

    </div>
}

export default Form