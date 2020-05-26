import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  FormGroup,
  Form,
  Button,
  Alert,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import { setAuthType } from '../redux/actions/actions';

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #ff0033;
`;

const LoginForm = styled.form`
  background: #fff;
  width: 32vw;
  padding: 60px;
  border-radius: 10px;
`;

const Title = styled.h3`
  text-align: center;
`;

const StyledSpan = styled.span`
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
`;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState('');

  // Login simulation
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setShowError(false);
    if (username === 'admin' && password === 'admin') {
      history.push('/admin');
      dispatch(setAuthType('admin'));
    } else if (username === 'employee' && password === 'employee') {
      history.push('/employee');
      dispatch(setAuthType('employee'));
    } else {
      setShowError(true);
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Password</Popover.Title>
      <Popover.Content>Are you 'admin' or an 'employee'?</Popover.Content>
    </Popover>
  );

  return (
    <LoginMain>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Login error!</Alert.Heading>
          <p>Username or password was incorrect. Please try again.</p>
        </Alert>
      )}
      <LoginForm onSubmit={handleSubmit}>
        <Title>Sign In</Title>

        <FormGroup>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button type="submit" block>
          Submit
        </Button>
        <p className="forgot-password text-right">
          Forgot{' '}
          {
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <StyledSpan>password</StyledSpan>
            </OverlayTrigger>
          }
          ?
        </p>
      </LoginForm>
    </LoginMain>
  );
};

export default Login;
