import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Home from './pages';
import SignInPage from './pages/signin';

function App() { 
  return (
    <Router className="App">
      <Switch>
        {/* hits the home page when this exact path is specified */}
        <Route path="/" component={Home} exact />
        {/* hits the signin page when this exact path is specified */}
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
