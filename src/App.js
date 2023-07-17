import { BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Benefits from './views/Benefits';
import Services from './views/Services';
import Roadmap from './views/Roadmap';
import Contact from './views/Contact';
import Home from './views/Home';
import ChatForm from './views/ChatForm';
import About from './views/About1';
// import Router from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
          <Routes>
              <Route path="/contact" element={<ChatForm />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={[
              <Home />,
              <Services />,
              <Benefits />,
              <Roadmap />,
              <Contact />]}>
              </Route>
          </Routes> 
    </div>
  );
}

export default App;
