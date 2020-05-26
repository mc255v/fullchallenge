import {
  EMPLOYEE_LIST_FETCH,
  SET_EMPLOYEE_LIST,
  EMPLOYEE_FETCH,
  SET_SELECTED_EMPLOYEE,
  CREATE_EMPLOYEE,
} from '../actions/type';

const initialEmployeesState = {
  isLoading: true,
  list: [],
  selectedEmployee: {
    isLoading: true,
    data: {
      id: '',
      name: '',
      position: '',
      start_date: '',
    },
  },
};

export default function employees(state = initialEmployeesState, action) {
  switch (action.type) {
    case EMPLOYEE_LIST_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case SET_EMPLOYEE_LIST:
      return {
        ...state,
        isLoading: false,
        list: action.list,
      };
    case EMPLOYEE_FETCH:
      return {
        ...state,
        selectedEmployee: {
          ...state.selectedEmployee,
          isLoading: true,
        },
      };
    case SET_SELECTED_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: {
          isLoading: false,
          data: action.employee,
        },
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: {
          isLoading: false,
          data: [],
        },
      };
    default:
      return state;
  }
}
