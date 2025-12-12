import React,{useState} from 'react';

  function RegistrationForm(){

    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    const handleUsername=(e)=>{
        setUsername(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit =(e)=>{
    e.preventDefault();
    if (!username || !email || !password) {
        setError("All fields  required.");
        return;
      }
  
      setError(""); // clear error
      alert("Successfull Submission");

    }
    
return(<>

<input type="text" placeholder="username" value={username} onChange={handleUsername}/>
<input type="email" placeholder="email" value={email} onChange={handleEmail}/>
<input type="password" placeholder="password" value={password} onChange={handlePassword}/>

<button onClick={handleSubmit}>Submit</button>

</>)

}
export default RegistrationForm

