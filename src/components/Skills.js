import React from 'react';
import "./Skills.css";
import Fade from 'react-reveal/Fade';

function Skills(){
    return (
        <Fade bottom>
        <div id="Skills" className="section" data-aos="fade-up">
            <p className="headline">Skills</p>
            <ul data-aos="fade-up">
                <li><i className="fab fa-java fa-4x"></i> Java</li>
                <li><i className="fas fa-copyright fa-4x"></i> C++</li>
                <li><i className="fab fa-python fa-4x"></i> Python</li>
                <li><i className="fas fa-ad fa-4x"></i> Photoshop</li>
                <li><i className="fab fa-html5 fa-4x"></i> HTML5</li>
                <li><i className="fab fa-css3 fa-4x"></i> CSS3</li>
                <li><i className="fab fa-js fa-4x"></i> Javascript</li>
                <li><i className="fab fa-react fa-4x"></i> React</li>
            </ul>
            <img src="/assets/design.svg"/>
        </div>
        </Fade>
    )
}

export default Skills;