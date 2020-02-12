import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { LoginProvider } from 'context/LoginContext';
import ProtectedRoute from 'components/ProtectedRoute';
import MachineSelection from 'components/MachineSelection';
import PageNotFound from 'components/PageNotFound';

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
