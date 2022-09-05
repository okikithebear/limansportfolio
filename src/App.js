import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skill } from './components/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skill/>
    </div>
  );
}

export default App;
