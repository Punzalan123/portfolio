import React from "react";
import './footer.css';
import { FaGithub as Git} from 'react-icons/fa';
import { FaLinkedin as Link } from 'react-icons/fa';
import { FaFacebookF as Face } from 'react-icons/fa';
import { SiGmail as Gm } from 'react-icons/si';
import { FaTwitter as Twit } from 'react-icons/fa';
import { FaRegCopyright as Copy} from 'react-icons/fa';

const Footr = () => {
    return(
        <div id="footer" >
            <h3>Let's Make Things Happen</h3>
            <hr className="col-8" />
            <div className="links col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10">
                <div className="rowlink">
                    <a href="https://github.com/Punzalan123" target="blank"><Git /> </a>
                    <a href="https://www.linkedin.com/in/reinpunzalan" target="blank"><Link /></a>
                    <a href="https://web.facebook.com/punzalanrein/" target="blank"><Face /></a>
                    <a href="https://mail.google.com/" target="blank"><Gm /></a>
                    <a href="https://twitter.com/" target="blank"><Twit /></a>
                </div>
            </div>

            <p>
                Copyright <Copy /> 2022 Rein Punzalan <br/>
                <span className="opacity-50">Last Updated December 2022</span>
            </p>
            
        </div>
    )
}


export default Footr;