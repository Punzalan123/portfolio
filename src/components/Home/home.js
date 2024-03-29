import React from "react";
import './home.css';
import rvn from '../../imagess/rvn.png';
import { Link } from "react-scroll";
import {IoIosArrowDown as Arrow} from 'react-icons/io';

const Home = () => {
    return(
        <div id="home" name="home" >
            <div className='htx'>
                <h1><span className="rein-span">
                Hi There! I'm Rein,  
                </span><br />
                a
                <span className="web-span">&nbsp;Web Developer&nbsp;</span>
                </h1>
                <h2>Welcome to My<span className="per-span"> Portfolio Website</span></h2>
                <Link to='about'><button className="readMore">Read More <Arrow/> </button></Link>        
            </div>
            <div>
                <img src={rvn} alt="r-p" />
            </div>

            <div className="wavy">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="wavy2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            

        </div>
    )
}


export default Home;