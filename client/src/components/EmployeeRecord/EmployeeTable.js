import Spinner from "../utils/Spinner";
import "./../../styles/employeeTable.css";
const EmployeeTable = ({ empData }) => {
  const { employees } = empData;
  const renderRecord = () => {
    const emps = Object.values(employees);
    return emps.map((emp, index) => {
      return (
        emp && (
          <tr key={emp.id || index}>
            <td>{emp.id}</td>
            <td>{emp.eName}</td>
            <td>{emp.dptName}</td>
          </tr>
        )
      );
    });
  };
  if (employees.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h3>Employee Records</h3>
        <div className="ui container employee-table">
          <section className="section-content">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>{renderRecord()}</tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
};
export default EmployeeTable;
