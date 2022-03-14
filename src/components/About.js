import React from 'react';
import "./About.css";
import Fade from 'react-reveal/Fade';

function About(){
    return (
        <Fade bottom cascade>
        <div id="About" className="section">
            <p className="headline">About Me</p>
            <img src="/assets/blogging.svg"/>
            <div data-aos="fade-up">
                <ul>
                    <li>Hi, I am currently a student pursuing B.Tech with CSE.</li>
                    <li>I am proficient with languages like Java, C++, Python and Full-Stack development technologies.</li>
                    <li>My Hobbies include coding, drawing and sometimes playing videogames.</li>
                    <li>Enjoy the visit.</li>
                </ul>
            </div>
        </div>
        </Fade>
    )
}

export default About;