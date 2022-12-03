import './App.css';
import NaviBar from './components/Nav/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Tech from './components/Tech/tech';
import Project from './components/Project/projects';
import Contact from './components/Contact/contact';
import Footr from './components/Contact/footer';
import {useState, useEffect} from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


export default function App() {
  const [lodi, setLodi] = useState(true);

  function fr() {
    return new Promise(gon => setTimeout(() => gon(), 2500));
  }

  useEffect(() => {
    fr().then(() => {
      const el = document.querySelector(".spinner-box");
      if (el) {
        el.remove();
        setLodi(!lodi);
      }
    });
  }, []);

  if (lodi) {
    return null;
  }

  return (
    <div className="App" >
      <NaviBar />
      <Home />
      <About  />
      <Tech />
      <Project />
      <Contact />
      <Footr />
    </div>
  );
}
