import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Benefits from './views/Benefits';
import Services from './views/Services';
import Roadmap from './views/Roadmap';
import Contact from './views/Contact';
import Home from './views/Home';
import ChatForm from './views/ChatForm';
import Router from './routes';

function App() {
  return (
    <div className="App">
        <Navbar />
    <div className="content">
        <Home />
        <Services />
        <Benefits />
        <Roadmap />
        <Contact />
    </div>
        <Router>
          <Route path='/contact' component={ChatForm} />
        </Router>
    </div>
  );
}

export default App;
