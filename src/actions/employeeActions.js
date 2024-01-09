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
} from "./../utils/actionType";
import employee from "../services/employee";

export const createEmp = ({ eName, dptName }) => {
  return async (dispatch) => {
    const res = await employee.post("/employees", { eName, dptName });
    dispatch({ type: CREATE_EMP, payload: res.data });
  };
};

export const fetchEmpRecords = () => {
  return async (dispatch) => {
    try {
      const res = await employee.get("/employees");
      dispatch({ type: FETCH_EMPS, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_EMPS_FAILURE, payload: error.message });
    }
  };
};

export const fetchEmpRecord = (id) => {
  return async (dispatch) => {
    try {
      const res = await employee.get(`/employees/${id}`);
      dispatch({ type: FETCH_EMP, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_EMP_FAILURE, payload: error.response.statusText });
    }
  };
};

export const updateEmployee = ({ id, eName, dptName }) => {
  return async (dispatch) => {
    try {
      const res = await employee.patch(`/employees/${id}`, { eName, dptName });
      dispatch({ type: UPDATE_EMP, payload: res.data });
    } catch (error) {
      dispatch({ type: UPDATE_EMP_FAILURE, payload: error.message });
    }
  };
};

export const deleteEmployee = (id) => {
  console.log("ActionCreator deleteEmployee ** index ", id);
  return async (dispatch) => {
    try {
      const res = await employee.delete(`/employees/${id}`);
      const { config, data, headers, request, ...resTrimmed } = res;
      const payload = { ...resTrimmed, id };
      dispatch({ type: DELETE_EMP, payload });
    } catch (error) {
      dispatch({
        type: DELETE_EMP_FAILURE,
        payload: error.response.statusText,
      });
    }
  };
};
