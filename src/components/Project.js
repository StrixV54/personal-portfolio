import React from 'react';
import "./Project.css";
import Fade from 'react-reveal/Fade';

function Project(){
    return (
        <Fade bottom>
        <div id="Projects" className="section" data-aos="fade-up">
            <p className="headline">Projects</p>
            <div className="card card1">
            <div className="pic"></div>
            <div className="head">
                <span>NotesVault</span>
                <a href="#"><i className="fas fa-external-link-alt fa-1x"></i></a>
                </div>
            <p>An interactive Notes web app.</p>
            </div>
            <div className="card card2">
                <div className="pic"></div>
                <div className="head">
                    <span>YT-Player</span>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
                <p>YouTube Player and Downloader in Python.</p>
            </div>
            <div className="card card3">
                <div className="pic"></div>
                <div className="head">
                    <span>Emojify Ai</span>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
                <p>Ai project which shows emoji according to face expression.</p>
            </div>
        </div>
        </Fade>
    )
}

export default Project;