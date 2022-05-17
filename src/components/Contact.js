import React from 'react';
import "./Contact.css";
import Fade from 'react-reveal/Fade';

function Contact(){
    return (
        <Fade bottom>
        <div id="Contact" className="section"  data-aos="fade-up">
            <p className="headline">Contact Me</p>
            <img src="/assets/thinking.svg"/>
            <div>
                <span className="bold">Reach Me on gmail</span>
                Email: shrikantkumar54@gmail.com
                <span className="bold">or</span> 
                <span className="bold">Call me anytime</span>
                Contact No: 99XXXXXXXX
                <div className="social-bar">
                    <i className="fab fa-github fa-3x" href=""></i>
                    <i className="fab fa-twitter-square fa-3x"></i>
                    <i className="fab fa-facebook-square fa-3x"></i>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Contact;