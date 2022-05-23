import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import News from './components/News';
import Home from './components/pages/Home';
import Category from './components/Category/Category';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/category' component={Category}/>
        <Route path='/news' component={News}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;