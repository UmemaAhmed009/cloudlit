import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Benefits from './views/Benefits';
import Services from './views/Services';
import Roadmap from './views/Roadmap';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Services />
      <Benefits />
      <Roadmap/>
      <Contact/>
    </div>
  );
}

export default App;
