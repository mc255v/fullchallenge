import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Container, Row, Col, Spinner, Modal } from 'react-bootstrap';
import {
  getEmployee,
  clearEmployee,
  createEmployee,
  updateEmployee,
  removeEmployee,
  createReview,
} from '../../redux/actions/actions';

const LoadingContainer = styled.div`
  text-align: center;
  padding: 100px;
`;

const EmployeeView = () => {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.employees.selectedEmployee);
  const [title, setTitle] = useState('Employee');
  const [btnTitle, setBtnTitle] = useState('Update');
  const { id } = useParams();
  const history = useHistory();
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    if (id !== 'create') {
      dispatch(getEmployee(id));
      setTitle(`Employee #${id}`);
    } else {
      dispatch(clearEmployee());
      setTitle('Add New Employee');
      setBtnTitle('Add Employee');
    }
  }, [id]);

  const { isLoading, data } = employee;
  const handleDeleteModal = () => setShowDelete(!showDelete);
  const handleUpdateModal = () => setShowUpdate(!showUpdate);

  const handleUpdate = e => {
    e.preventDefault();
    const update = {
      id: id === 'create' ? e.target.employeeId.value : id,
      name: e.target.name.value,
      position: e.target.position.value,
      start_date: e.target.startDate.value,
    };
    if (id === 'create') {
      dispatch(createEmployee(update)).then(() =>
        history.push('/admin/employees'),
      );
    } else {
      dispatch(updateEmployee(update)).then(() => setShowUpdate(true));
    }
  };

  const handleDelete = () => {
    dispatch(removeEmployee(id)).then(() => history.push('/admin/employees'));
  };

  const addReview = () => {
    dispatch(createReview({ employee_id: id })).then(res => {
      if (res.id) history.push(`/admin/reviews/${res.id}`);
    });
  };

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>{title}</h2>
          </div>
          {id !== 'create' && (
            <div className="col-sm-4">
              <Button variation="primary" onClick={() => addReview()}>
                Add New Review
              </Button>
            </div>
          )}
        </div>
      </div>
      {isLoading && (
        <LoadingContainer>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </LoadingContainer>
      )}
      {!isLoading && (
        <form id="employeeForm" onSubmit={e => handleUpdate(e)}>
          {id === 'create' && (
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="employeeId">Employee ID#</label>
                <input type="text" className="form-control" id="employeeId" />
              </div>
            </div>
          )}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                defaultValue={data.name}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                className="form-control"
                id="position"
                placeholder="Position"
                defaultValue={data.position}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option defaultValue>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              className="form-control col-md-4"
              id="startDate"
              defaultValue={data.start_date}
              min="1990-01-01"
            />
          </div>
        </form>
      )}
      <Button
        type="submit"
        form="employeeForm"
        variant="primary"
        className="col-md-3 mr-2"
      >
        {btnTitle}
      </Button>
      {id !== 'create' && (
        <Button
          variant="danger"
          className="col-md-2"
          onClick={handleDeleteModal}
        >
          Delete
        </Button>
      )}
      <Modal show={showDelete} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will permanently remove Employee ID#{id}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showUpdate} onHide={handleUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Employee ID#{id} has been updated</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpdateModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default EmployeeView;
