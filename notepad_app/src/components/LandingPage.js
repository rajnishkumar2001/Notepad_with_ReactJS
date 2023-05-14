import React from 'react'
import image from '../landing-backgroound.png'
import { Link } from 'react-router-dom'
import '../App.css'

function LandingPage() {

    // position: relative;
    // border: 1px solid black;
    // color: #fff;
    // background-color: gray;
    // border-radius: 8px;
    // display: inline-block;
    // width: 12rem;
    // height: 2rem;
    // padding-top: 3px;
    // text-decoration: none;
    return (
        <>
            <div className='landingpage' style={{ backgroundImage: `url(${image})`, height: "49.5rem" }}>
                <center>
                    <h1 style={{ fontSize: "4.5rem", fontWeight: "bold", position: "relative", top: "8rem" }}>
                        Welcome to the AI Notepad
                    </h1>
                    <p style={{ fontSize: "2rem", position: "relative", top: "6.6rem" }}>You can write your notes and search any query.</p>
                    <div style={{position:"relative", left:"4rem"}}>
                        <Link className='notepadlink' to="/notepad">Notepad &rarr;</Link>
                        <Link className='searchquerylink' to="/query">Search Query &rarr;</Link>
                    </div>
                    {/* <button>Notepad</button><button>Search Query</button> */}
                </center>
            </div>
        </>
    )
}

export default LandingPage