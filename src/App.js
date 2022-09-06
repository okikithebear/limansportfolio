import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skill } from './components/Skill';
import { Projects } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
