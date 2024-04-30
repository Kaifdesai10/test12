import { useState }from 'react';
import React, { useEffect } from 'react';

function App() {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[show,setShow]=useState(false);



  const handleOnChange1 =(event)=>{
    setName(event.target.value);
    
  }
  const handleOnChange2 =(event)=>{
    setEmail(event.target.value);
    
  }
  const handleOnChange3 =(event)=>{
    setMessage(event.target.value);
    
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setShow(true);
  }

  return (
 <>
 <form onSubmit={handleSubmit}>
  <label>Name:</label><input type='text' placeholder='Enter your name' onChange={handleOnChange1} value={name}/><br/>
  <label>Email:</label><input type='text' placeholder='Enter your email' onChange={handleOnChange2} value={email}/><br/>
  <label>Message:</label><input type='text' placeholder='Enter your Message' onChange={handleOnChange3} value={message}/><br/>

  <button type='submit'>Submit</button>
 </form>

 {show? <>
      yourName:{name}<br/>
      yourEmail:{email}<br/>
      yourMesssage:{message}
      </>   : null}

 </>
  )
}

export default App;
