import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddEmployee from './components/AddEmployee';
import { useEffect,useState } from 'react';
import './App.css';

function App ()
{
  
  
  
  
  
  return (
    <div style={{maxWidth:'30rem',margin:'4rem auto'}}>
      <Router>
        {/* <h1>Nav </h1> */}
        <Switch>
          <Route exact path="/add" component={AddUser} />
          <Route path="/edit" component={ EditUser } />
          {/* <Route path="/addEmployee" component={AddEmployee} /> */}
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
