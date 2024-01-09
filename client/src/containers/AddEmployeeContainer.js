import AddEmployeeForm from "../components/AddEmployee/AddEmployeeForm";
import { connect } from "react-redux";
import { createEmp } from "../actions/employeeActions";
import { useNavigate } from "react-router-dom";

const AddEmployeeContainer = ({ createEmp }) => {
  let navigate = useNavigate();
  const onSubmit = (employeeData) => {
    //call to action creator
    createEmp(employeeData);
    navigate("/");
  };
  return <AddEmployeeForm onSubmit={onSubmit} />;
};
export default connect(null, { createEmp })(AddEmployeeContainer);
