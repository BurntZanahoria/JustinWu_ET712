import React from "react";
import computerimg from '../images/computer.jpg'

const Home = function(){
    return(<>
        <header className="header">
            <h1 className="headertitle">Homepage</h1>
        </header>
        <main className="maincontainer">
            <div>
                <img src={computerimg}/>
            </div>
        </main>
    </>
    )
}

export default Home