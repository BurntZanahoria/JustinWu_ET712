import React from "react";
import './App.css'

const User_feedback = function(props){
    return(
        <>
                <section className="feedbackcard">
                    <div className="content">
                        <p>{props.username}</p>
                    </div>
                    <div  className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon">
                            <span>&#10011;</span>
                            Add Feedback
                        </p>
                    </div>
                </section>
           
        </>
    )

}

export default User_feedback