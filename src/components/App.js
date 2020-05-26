import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from './AdminView/Admin';
import Employee from './EmployeeView/Employee';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/employee">
        <Employee />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
