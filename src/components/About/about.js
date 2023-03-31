import React from "react";
import './about.css';
import ako from '../../imagess/ako.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import lx from './aboutTimeLine';

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
                {lx.map((i) => (
                    <VerticalTimelineElement
                    key={i.key}
                    contentStyle={i.contentStyle}
                    contentArrowStyle={i.contentArrowStyle}
                    date={i.date}
                    iconStyle={i.iconStyle}
                    icon={i.icon}
                >
                    <h4 className="vertical-timeline-element-title">{i.title}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{i.subTitle}</h5>
                    <p>{i.pDetails}</p>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            
        </div>
    )
}


export default About;