import React from "react";
import './errorpage.css'   
import '../navbar/navbar.jsx'
import Navbar from "../navbar/navbar.jsx";
import {Link} from 'react-router-dom';

const Errorpage = () => {
    return (
        
        <div className="errorpage">
            <Navbar />
            <h1 style={{
                color: 'white',
                fontSize: '100px',
                fontFamily: 'Bubblegum Sans',
                top: '50%',
                left: '50%',
                position: 'absolute',
            }}>You have ran into an error.This page does not exist.</h1>
            <Link to="/">
            <button style={{
                color: 'white',
                fontSize: '50px',
                fontFamily: 'Bubblegum Sans',
                top: '80%',
                left: '50%',
                position: 'absolute',
                backgroundColor: '#FF4820',
            }}>Go back</button>
            </Link>
        </div>
    )
}

export default Errorpage;