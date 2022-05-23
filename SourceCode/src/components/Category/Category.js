
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import News from '../News';
import Word from './Word';





function Category() {
  return (
    
    <Router>
        <Word/>
         <News/>
         </Router>
  );
}

export default Category;