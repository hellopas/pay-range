import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { LoginProvider } from 'context/LoginContext';
import ProtectedRoute from 'components/ProtectedRoute';
import MachineSelection from 'components/MachineSelection';
import PageNotFound from 'components/PageNotFound';

/**
 * Wrapping everything in <LoginProvider /> allows every component rendered to access
 * user data after logging in. ProtectedRoute for / shows either the login page or the 
 * logged in machine selection page, depending on whether the user is logged in. In this
 * example project, we are treating the machine selection page as the homepage the user sees
 * onced logged in.
 */
function App() {
  return (
      <div className="App">
        <Router>
          <LoginProvider>
            <Switch>
              
              <ProtectedRoute exact path='/' component={ MachineSelection } />
              <Route component={ PageNotFound }/>
            
            </Switch>
          </LoginProvider>
        </Router>
      
      </div>

  );
}

export default App;
