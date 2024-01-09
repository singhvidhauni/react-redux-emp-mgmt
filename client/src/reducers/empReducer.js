import _ from "lodash";
import {
  CREATE_EMP,
  FETCH_EMP,
  FETCH_EMPS,
  DELETE_EMP,
  UPDATE_EMP,
  FETCH_EMPS_FAILURE,
  FETCH_EMP_FAILURE,
  DELETE_EMP_FAILURE,
  UPDATE_EMP_FAILURE,
  CREATE_EMP_FAILURE,
} from "../utils/actionType";
const initialState = {
  employees: [],
  error: null,
};
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMP:
    case UPDATE_EMP:
    case FETCH_EMP:
      return {
        ...state,
        employees: { ...state.employees, [action.payload.id]: action.payload },
        loading: false,
        error: null,
      };
    case DELETE_EMP:
      const { [action.payload.id]: removeEmployee, ...remainingEmployees } =
        state.employees;
      return {
        ...state,
        employees: remainingEmployees,
        ...action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EMPS:
      return {
        ...state,
        employees: { ...state.employees, ..._.mapKeys(action.payload, "id") },
        loading: false,
        error: null,
      };
    case FETCH_EMP_FAILURE:
      return {
        ...state,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    case DELETE_EMP_FAILURE:
      const { status, statusText, ...newState } = state;
      return {
        ...newState,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default empReducer;
