import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { employeeSidebar } from '../../props/sidebar';
import { employeeDashboard } from '../../props/dashboard';

import Sidebar from '../Nav/Sidebar';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard';
import Feedback from '../Feedback';
import MyReviews from '../MyReviews';

const Admin = () => {
  const url = '/employee';
  const id = 2234567890;
  const history = useHistory();

  const handleClick = () => {
    history.push('/employee/feedback');
  };

  return (
    <div className="App">
      <Nav view="Employee" />
      <div className="container-fluid">
        <div className="row">
          <Sidebar top={employeeSidebar.top} bottom={employeeSidebar.bottom} />
          <Switch>
            <Route path={`${url}/dashboard`}>
              <Dashboard
                jumbo={employeeDashboard.jumbotron}
                table={employeeDashboard.table}
                id={id}
                handleClick={handleClick}
              />
            </Route>
            <Route path={`${url}/feedback`}>
              <Feedback />
            </Route>
            <Route path={`${url}/reviews`}>
              <MyReviews />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
