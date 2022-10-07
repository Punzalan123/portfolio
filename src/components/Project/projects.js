import React from "react";
import './project.css';
import project from './projectDet';
import ProCard from "./projectCards";

const Project = () => {
    return(
        <div id="project" name="project" >
            <h1 className="project-txt">Projects</h1>
            <p className="project-dsc">These are my projects.</p>
            <div className="container">
                <div className="row justify-content-center">
                {project.minipro.map((pro, key) => {
                        return (
                            <ProCard
                            pro={pro}
                            key={key}
                            image={pro.image}
                            name={pro.name}
                            details={pro.details}
                            code={pro.code}
                            site={pro.site}
                             />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Project;