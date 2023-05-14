import React, {useState} from 'react'
import '../Register.css'
import RegisterFetch from '../containers/ManageRegistrationAuth'
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const value = ()=>{
    RegisterFetch({"email":email,"username":username,"password":password},
    alert("Please check email to activate your account!"),
    navigate('/login')
    )}
  return (
    <>
      <div className='mainDiv'>
        <h1>Registration</h1>
        <div className="tag">
          <div className='value'>
            <label htmlFor="">Email :</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Please Enter Your email" />
          </div>
          <div className='value'>
            <label htmlFor="">Username :</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Please Enter Your Username" />
          </div>
          <div className='value'>
            <label htmlFor="">Password :</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="********" />
          </div>
          <button onClick={value}>Signup</button>
          <div className='clickhere'>
          <i class="fa fa-hand-o-right"></i>
            <label htmlFor="">If you have already register</label> <a href='/'>click here</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register