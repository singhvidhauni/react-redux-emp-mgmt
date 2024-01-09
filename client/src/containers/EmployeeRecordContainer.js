import { connect } from "react-redux";
import { useEffect } from "react";
import EmployeeTable from "../components/EmployeeRecord/EmployeeTable";
import { fetchEmpRecords } from "../actions/employeeActions";
const EmployeeRecordContainer = ({ employees, fetchEmpRecords }) => {
  useEffect(() => {
    fetchEmpRecords();
  }, [fetchEmpRecords]);
  return <EmployeeTable empData={employees} />;
};
const mapStateToProps = (state) => {
  return { employees: state.employees };
};
export default connect(mapStateToProps, { fetchEmpRecords })(
  EmployeeRecordContainer
);
