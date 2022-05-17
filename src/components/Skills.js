import React from 'react';
import "./Skills.css";
import Fade from 'react-reveal/Fade';

function Skills(){
    return (
        <Fade bottom>
        <div id="Skills" className="section" data-aos="fade-up">
            <p className="headline">Skills</p>
            <ul data-aos="fade-up">
                {/* <li><i className="fab fa-java fa-4x"></i> Java</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /> Java</li>
                {/* <li><i className="fas fa-copyright fa-4x"></i> C++</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />C++</li>
                {/* <li><i className="fab fa-python fa-4x"></i> Python</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />Python</li>
                {/* <li><i className="fas fa-ad fa-4x"></i> Photoshop</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />Photoshop</li>
                {/* <li><i className="fab fa-html5 fa-4x"></i> HTML5</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />HTML</li>
                {/* <li><i className="fab fa-css3 fa-4x"></i> CSS3</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />CSS</li>
                {/* <li><i className="fab fa-js fa-4x"></i> JavaScript</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /> JavaScript</li>
                {/* <li><i className="fab fa-react fa-4x"></i> React</li> */}
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />NodeJs</li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />React</li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> Git</li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />Google Cloud</li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" />IntelliJ</li>
            </ul>
            <img className="side-img" src="/assets/design.svg"/>
        </div>
        </Fade>
    )
}

export default Skills;