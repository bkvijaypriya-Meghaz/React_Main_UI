import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/assets/css/style.css"


import Home from './components/Home'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Parent from './Parent'
import Student from './Student' 
import Teacher from './Teacher'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/Parent/" component ={Parent}/>
      <Route  exact path="/Student/" component ={Student}/>
      <Route  exact path="/Teacher/" component ={Teacher}/>
      </Router>     
    </div>
  );
}

export default App;