import React from "react";
import './about.css';
import ako from '../../imagess/ako.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap as Grad} from 'react-icons/fa';
import {FaPython as Free} from 'react-icons/fa';
import {FaHtml5 as KodeGo} from 'react-icons/fa';
import {GrNode as Bayan} from 'react-icons/gr';
import {FaReact as Link} from 'react-icons/fa';

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
            <h2 className="text-center mt-4 mb-1">Learning Experience</h2>
            <p className="text-center" >My journey in learning to Code</p>
            <VerticalTimeline animate={false} lineColor={'#2cff87'}>
                <VerticalTimelineElement
                    contentStyle={{ background: '#586eff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #586eff' }}
                    date="S.Y. 2019 - 2020"
                    iconStyle={{ background: '#586eff', color: '#fff' }}
                    icon={<Grad />}
                >
                    <h4 className="vertical-timeline-element-title">SHS Diploma | Computer Systems Servicing</h4>
                    <h5 className="vertical-timeline-element-subtitle">Tanauan Institute Inc.</h5>
                    <p>
                    Learned the fundamentals of computer systems and practiced the basics of programming
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(120, 11, 192)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(120, 11, 192)' }}
                    date="December 2021 - January 2022"
                    iconStyle={{ background: 'rgb(120, 11, 192)', color: '#fff' }}
                    icon={<Free />}   
                >
                    <h4 className="vertical-timeline-element-title">Python Programming Course</h4>
                    <h5 className="vertical-timeline-element-subtitle">freeCodeCamp</h5>
                    <p>
                    Learned from the basics to core concepts in python programming
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#586eff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #586eff' }}
                    date="May 2022 - August 2022"
                    iconStyle={{ background: '#586eff', color: '#fff' }}
                    icon={<KodeGo />}
                    
                >
                    <h4 className="vertical-timeline-element-title">Full Stack Web Development</h4>
                    <h5 className="vertical-timeline-element-subtitle">KodeGo</h5>
                    <p>
                    Learned the fundamentals of Full Stack Web Development
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(120, 11, 192)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(120, 11, 192)' }}
                    date="September 2022 - October 2022"
                    iconStyle={{ background: 'rgb(120, 11, 192)', color: '#fff' }}
                    icon={<Bayan />}
                    
                >
                    <h4 className="vertical-timeline-element-title">Back-End Web Development</h4>
                    <h5 className="vertical-timeline-element-subtitle">Bayan Academy</h5>
                    <p>
                    Learned the foundations of Back-End Web Development
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#586eff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #586eff' }}
                    date="December 2022 - present"
                    iconStyle={{ background: '#586eff', color: '#fff' }}
                    icon={<Link />}
                >
                    <h4 className="vertical-timeline-element-title">App Development with the MERN Stack</h4>
                    <h5 className="vertical-timeline-element-subtitle">LinkedIn Learning</h5>
                    <p>
                    Studying the MERN Stack to create full-stack applications
                    </p>
                </VerticalTimelineElement>                
            </VerticalTimeline>
            
        </div>
    )
}


export default About;
