import React from "react";
import { Link } from "react-router-dom";

const Navbars = function(){
    return(<>
        <header className="header">
            <nav className="navbar">
                <div>
                    <a href="https://www.qcc.cuny.edu/" target="blank">QCC</a>
                </div>
                <div className="btngroup">
                    <button><Link to='/contact' className="link">Contact Us</Link></button>
                    <button><Link to='/' className="link">Home</Link></button>
                </div>
            </nav>
        </header>
    
    
    </>
    )
}

export default Navbars