import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Home from './pages';

function App() { 
  return (
    <Router className="App">
      <Home />
    </Router>
  );
}

export default App;
