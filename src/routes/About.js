import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom  is the freedom"
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;