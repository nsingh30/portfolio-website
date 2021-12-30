
// import Header from './MyComponents/Header';
// import {Projects} from './MyComponents/Projects';
// import {Footer} from './MyComponents/Footer';
// import {Navbar, Nav, Container} from 'react-bootstrap';
import Contact from './MyComponents/Contact/Contact';
import About from './MyComponents/About/About';
import Top from './MyComponents/Top/Top';
import Work from './MyComponents/Work/Work';
import Intro from './MyComponents/Intro/Intro';
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="top">
        <Top/>
      </div>
      <div className="section">
        <Intro/>
        <Work/>
        <About/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
