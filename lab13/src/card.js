import React from "react";
import batman_img from './images/icon_batman.png'
import './App.css'

const User = function(props){
    return(<>
    <section className="card">
        <a><img src = {props.image}/> </a>
        <div className="content">
            <a className="author">{props.name}</a>
        </div>

        <div className="metadata">
            <p>Posted on <span className="date">{props.date}</span></p>
        </div>

        <div className="comment">
            <p> "<em>{props.msg}</em>" </p>
        </div>
    </section>


    </>)
}

export default User;