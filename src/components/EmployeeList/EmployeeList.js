import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { getEmployeeList } from '../../redux/actions/actions';

const LoadingContainer = styled.div`
  text-align: center;
  padding: 100px;
`;

const EmployeeList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, []);

  const handleClick = id => {
    history.push(`/admin/employees/${id}`);
  };

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <Container>
        <Row>
          <Col sm={6}>
            <h2>Employee Listing</h2>
          </Col>
          <Col sm={4}>
            <Link to="/admin/employees/create">
              <Button variant="primary">Add New Employee</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {!employees.isLoading &&
              employees.list.map(employee => (
                <tr key={employee.id} onClick={() => handleClick(employee.id)}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.start_date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {employees.isLoading && (
        <LoadingContainer>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </LoadingContainer>
      )}
    </main>
  );
};

export default EmployeeList;
