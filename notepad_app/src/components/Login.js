import React, {useState} from 'react'
import '../Login.css'
import LoginFetch from '../containers/ManageLoginAuth'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const value = (async()=>{
        const data = await LoginFetch({email:email, password:password,remember:remember})
        if(data.ok === true){
            navigate('/')
        }else{
            alert("Please Enter valid Credential")
        }
    });
    return (
        <>
            <div className='mainDiv'>
                <h1>Login</h1>
                <div className="tag">
                    <div className='value'>
                        <label htmlFor="">Email :</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Please Enter Your Email" required/>
                    </div>
                    <div className='value'>
                        <label htmlFor="">Password :</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="**********" required/>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" onChange={(e)=>setRemember(e.target.checked)} value={remember}/>
                        <label htmlFor="">Remembar me</label>
                    </div>
                    <button onClick={value}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login