import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { adminSidebar } from '../../props/sidebar';
import { adminDashboard } from '../../props/dashboard';
import Sidebar from '../Nav/Sidebar';
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeView from '../EmployeeList/EmployeeView';
import ReviewList from '../ReviewList';
import Review from '../Review';
import '../../styles/Admin.css';

const Admin = () => {
  const url = '/admin';

  return (
    <>
      <Nav view="Admin" />
      <Container fluid>
        <Row>
          <Sidebar top={adminSidebar.top} bottom={adminSidebar.bottom} />
          <Switch>
            <Route exact path={url}>
              <Dashboard
                jumbo={adminDashboard.jumbotron}
                table={adminDashboard.table}
              />
            </Route>
            <Route exact path={`${url}/employees`}>
              <EmployeeList />
            </Route>
            <Route path={`${url}/employees/:id`}>
              <EmployeeView />
            </Route>
            <Route exact path={`${url}/reviews`}>
              <ReviewList />
            </Route>
            <Route path={`${url}/reviews/:id`}>
              <Review />
            </Route>
          </Switch>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
