import React from "react";
import './about.css';
import ako from '../../imagess/ako.jpg';

const About = () => {
    return(
        <div id="about" name="about">
            <h1 className="about-title">About Me</h1>
            <div className="about-con row ">
                <div className="about-image col-10 col-lg-3 col-md-4 my-5">
                    <img src={ako} alt="#$" className="pic"/>
                </div>
                <div className="about-text col-12 col-lg-6 col-md-6 my-5">
                    <p>Hi ! My name is Reineil Punzalan, Rein for short. I'm an aspiring Web Developer from the  Philippines and I enjoy programming, solving puzzles and math problems, playing Chess &amp; watching Anime. I am driven and motivated to learn and grow professionally as a Developer. I'm always eager to learn new things and I like solving every challenging problems that I encounter. I like turning Ideas into reality and I am capable of collaborating effectively in a team setting where I can share ideas, work on projects and build a responsive fascinating website.</p>
                </div>
            </div>
            <h2 className="text-center text-white my-4">Profile</h2>
            <div className="">
                <div className="web-dev col-lg-8 col-md-11 col-11 mx-auto ">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="rowy row">
                                <h6 className="col-3">Name:</h6>
                                <h6 className="col-9">Reineil Punzalan</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Age:</h6>
                                <h6 className="col-9">20</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Birthday:</h6>
                                <h6 className="col-9">July  3, 2002</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Address:</h6>
                                <h6 className="col-9">Sto. Tomas City, Batangas</h6>
                            </div>
                        </div>
                        <div className="rowy2 col-lg-6 col-md-6 col-12">
                            <div className="rowy row">
                                <h6 className="col-3">Phone:</h6>
                                <h6 className="col-9">0956-350-1471</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Email:</h6>
                                <h6 className="col-9">punzalanreiniel@gmail.com</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Degree:</h6>
                                <h6 className="col-9">SHS Graduate</h6>
                            </div>
                            <div className="rowy row">
                                <h6 className="col-3">Certificate:</h6>
                                <h6 className="col-9">KodeGo</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
