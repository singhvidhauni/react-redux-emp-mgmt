import { combineReducers } from "redux";
import empReducer from "./empReducer";
export default combineReducers({
  employees: empReducer,
});
