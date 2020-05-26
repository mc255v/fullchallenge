import axios from 'axios';
import {
  SET_AUTH_TYPE,
  EMPLOYEE_LIST_FETCH,
  SET_EMPLOYEE_LIST,
  EMPLOYEE_FETCH,
  SET_SELECTED_EMPLOYEE,
  CREATE_EMPLOYEE,
} from './type';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL ||
  'http://localhost:5000'}/api`;

// LOGIN
export const setAuthType = authType => {
  return dispatch =>
    dispatch({
      type: SET_AUTH_TYPE,
      authType,
    });
};

// EMPLOYEE LIST
export const getEmployeeList = () => {
  return async dispatch => {
    try {
      dispatch({ type: EMPLOYEE_LIST_FETCH });
      const res = await axios.get('/employees');
      dispatch({ type: SET_EMPLOYEE_LIST, list: res.data });
    } catch (error) {
      console.warn('=== EMPLOYEE LIST FETCH ERROR ===');
      console.error(error);
      throw error;
    }
  };
};

export const getEmployee = id => {
  return async dispatch => {
    try {
      dispatch({ type: EMPLOYEE_FETCH });
      const res = await axios.get(`/employees/${id}`);
      dispatch({ type: SET_SELECTED_EMPLOYEE, employee: res.data });
    } catch (error) {
      console.warn('=== EMPLOYEE FETCH ERROR ===');
      console.error(error);
      throw error;
    }
  };
};

export const clearEmployee = () => {
  return dispatch => dispatch({ type: CREATE_EMPLOYEE });
};

export const createEmployee = employee => {
  return async dispatch => {
    try {
      dispatch({ type: CREATE_EMPLOYEE });
      const res = await axios.post('/employees', employee);
      return res.data;
    } catch (error) {
      console.warn('=== EMPLOYEE CREATE ERROR ===');
      console.error(error);
      throw error;
    }
  };
};

export const updateEmployee = update => {
  return async () => {
    try {
      const res = await axios.post(`/employees/${update.id}`, update);
      return res.data;
    } catch (error) {
      console.warn('=== EMPLOYEE UPDATE ERROR ===');
      console.error(error);
      throw error;
    }
  };
};

export const removeEmployee = id => {
  return async dispatch => {
    try {
      dispatch(clearEmployee());
      const res = await axios.delete(`/employees/${id}`);
      return res.data;
    } catch (error) {
      console.warn('=== EMPLOYEE REMOVE ERROR ===');
      console.error(error);
      throw error;
    }
  };
};

// REVIEWS
export const createReview = id => {
  return async dispatch => {
    try {
      const res = await axios.post('/reviews', id);
      return res.data;
    } catch (error) {
      console.warn('=== REVIEW CREATE ERROR ===');
      console.error(error);
      throw error;
    }
  };
};
