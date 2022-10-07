import React from "react";
import './tech.css';
import TechCard from "./techCard";
import techno from './techcomp';


const Tech = () => {
    return(
        <div id="tech" name="tech" >
            <h1 className="skill-txt">Skills</h1>
            <p className="skill-dsc">These are the Languages, Tools and Frameworks that I can use.</p>
            <div className="container">
                <div className="row justify-content-center">
                {techno.pro.map((tech, key) => {
                        return (
                            <TechCard
                            tech={tech}
                            key={key}
                            image={tech.image}
                            name={tech.name} />
                        )
                    })}
                </div>
            </div>            
            
            
            <p className="skill-dsc2">I have basic knowledge of these technologies.</p>
            <div className="container">
                <div className="row justify-content-center">
                {techno.basic.map((tech, key) => {
                        return (
                            <TechCard
                            tech={tech}
                            key={key}
                            image={tech.image}
                            name={tech.name} />
                        )
                    })}
                </div>
            </div>            

            <div className="curve-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            
            <div className="curve-bot">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}


export default Tech;