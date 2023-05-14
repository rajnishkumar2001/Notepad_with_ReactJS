import React from 'react'
import '../App.css'
import logo from '../2023-03-15_09-35.png'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()
    const session = localStorage.getItem('accessToken')
    const LogoutSession = (()=>{
        localStorage.removeItem("accessToken")
        navigate('/login')
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{ height: "69px" }}>
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img
                                src={logo}
                                height="70"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notepad">Notepad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/query">Query Search</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='navbar-nav me-auto mb-2 mb-lg-0'>
                        {
                            (!session) && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            ) || (session) && (
                                <>
                                    <li className="nav-item">
                                        <p style={{marginTop:"8px", color:"burlywood"}}>Activated</p>
                                    </li>
                                    <li className="nav-item">
                                        <button style={{marginLeft:"10px", border:"none", backgroundColor:"#fff",position:"relative", top:"5px"}} onClick={LogoutSession}>Logout</button>
                                    </li>
                                </>
                            )
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar