import React from 'react'

function Form() {
    return <div className='form-container'>
       
       <form action="" className='form'>
       <h1 className='form-heading'>ADD NEW TRANSACTION::</h1>
           <label for="">Transaction:</label>
           <input type="text" /> <br></br>
           <label for="">Amount:</label>
           <input type="text" /> <br></br>
           <label for="">Type:</label>
           <input type="text" /> <br></br>
           <label for="">Date:</label>
           <input type="text" /> <br></br>
           <label for="">Category:</label>
           <input type="text" /> <br></br>
           <button>SUBMIT</button>
       </form>

    </div>
}

export default Form