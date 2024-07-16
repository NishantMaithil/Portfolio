import Navbar from './components/Navbar';
import Home  from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App grid md:max-grid-cols-1">
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <SocialLinks/>
   <Skills/>
   <Contact/>
    </div>
  );
}

export default App;
