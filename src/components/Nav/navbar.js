import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars as Icon } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { BiCodeCurly as Rock } from 'react-icons/bi';
import './nav.css';
import { Link } from "react-scroll";


const NaviBar = () => {

    const [hvr, setHvr] = useState(false)
    const [hvr2, setHvr2] = useState(false)

    const hoverStyle = {
      color: 'whitesmoke',
      backgroundColor: 'transparent',
      outline: 'none',
      opacity: '0.9',
      boxShadow: 'none',
      transition: '0.5s ease',
    }
    const normalStyle = {
      color: 'rgb(39, 0, 130)',
      backgroundColor: 'rgb(245, 245, 245, 0.95)',
      outline: 'none',
      boxShadow: 'none',
      transition: '0.5s ease',
    }
    const normalStyleX = {
      color: 'rgb(39, 0, 130)',
      backgroundColor: 'rgb(250, 88, 182, 0.9)',
      outline: 'none',
      opacity: '0.8',
      boxShadow: 'none',
      transition: '0.5s ease',
    }
    const hoverStyleX = {
      color: 'whitesmoke',
      backgroundColor: 'transparent',
      outline: 'none',
      opacity: '0.5',
      boxShadow: 'none',
      transition: '0.5s ease',
    }

    const ofcan = {
      backgroundImage: 'linear-gradient(to bottom right, rgb(26, 26, 64), rgb(39, 0, 130), rgb(122, 11, 192))',
      transition: '0.8s ease',
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);    
    const reslink = () => {
      if (show){
        setShow(!show)
      }
    }

    const [navcol, setNavcol] = useState(false)

    const changebg = () => {
      window.scrollY >= 180 ? setNavcol(true) : setNavcol(false);
    }

    window.addEventListener('scroll', changebg );

    const navlinks = [
      {
        key: 1,
        link: "home",
        name: "Home",
      },
      {
        key: 2,
        link: "about",
        name: "About",
      },
      {
        key: 3,
        link: "tech",
        name: "Skills",
      },
      {
        key: 4,
        link: "project",
        name: "Projects",
      },
      {
        key: 5,
        link: "contact",
        name: "Contacts",
      },
    ]


    return(
            <Navbar fixed="top" expand='md' id="nav" className={navcol ? 'navigation' : ''}>
            <div className='container' >
            <Navbar.Brand href="/" className="text-white px-2 ms-2" style={{opacity: "0.95"}} ><Rock /> Rein</Navbar.Brand>
            <Navbar.Toggle 
                aria-controls = {`togy`} 
                style = {hvr ? normalStyle : hoverStyle} 
                className = "px-2 py-1 me-2 rounded rounded-3"
                onClick = {handleShow}
                onMouseEnter = {() => setHvr(true) }
                onMouseLeave = {() => setHvr(false) }
                >
  
                <Icon />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`togy`}
              aria-labelledby={`lavel`}
              placement="start"
              backdrop="static" 
              restoreFocus={false}
              show={show}
              style={show ? ofcan : {backgroundColor: 'transparent'}}
            >
              <Offcanvas.Header className="align-items-center p-0 " >
                <Offcanvas.Title id={`lavel`} className="py-4 ps-3 text-white fst-italic">
                  My Portfolio
                </Offcanvas.Title>
                  <button 
                  className="px-2 py-1 me-2 rounded rounded-3" 
                  onClick={reslink} 
                  style = {hvr2 ? normalStyleX : hoverStyleX} 
                  onMouseEnter = {() => setHvr2(true) }
                  onMouseLeave = {() => setHvr2(false) }
                  >
                    <HiX className='fs-4'/>
                  </button>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                {navlinks.map((l) => (
                  <div key={l.key} className="navigationlinks" >
                    <Link to={l.link} className="linkNav" onClick={reslink}>{l.name}</Link >
                  </div>                
                ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
    )
}

export default NaviBar;