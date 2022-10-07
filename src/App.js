import './App.css';
import NaviBar from './components/Nav/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Tech from './components/Tech/tech';
import Project from './components/Project/projects';
import Contact from './components/Contact/contact';
import Footr from './components/Contact/footer';

function App() {

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

export default App;
