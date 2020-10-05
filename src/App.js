import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link }
from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Registration from './Component/Registration/Registration';
import Login from './Component/Login/Login';
import Task from './Component/Task/Task';
import Admin from './Component/Admin/Admin';
import AddEvent from './Component/AddEvent/AddEvent';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

  const [event, setEvent] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={{event, setEvent, loggedInUser, setLoggedInUser}}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addEvent">
          <AddEvent></AddEvent>
        </Route>
        <PrivateRoute path="/event/:id">
          <Registration></Registration>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/task">
          <Task></Task>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
