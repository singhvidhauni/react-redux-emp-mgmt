import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployeeContainer from "./containers/AddEmployeeContainer";
import DeleteEmployeeContainer from "./containers/DeleteEmployeeContainer";
import EmployeeRecordContainer from "./containers/EmployeeRecordContainer";
import UpdateEmployeeContainer from "./containers/UpdateEmployeeContainer";
import Footer from "./components/Navigation/Footer";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <Router>
        <section className="routed-content-section">
          <Routes>
            <Route path="/" exact element={<EmployeeRecordContainer />}></Route>
            <Route
              path="/employees/show"
              exact
              element={<EmployeeRecordContainer />}
            ></Route>
            <Route
              path="/employees/new"
              exact
              element={<AddEmployeeContainer />}
            ></Route>
            <Route
              path="/employees/edit/:id"
              exact
              element={<UpdateEmployeeContainer />}
            ></Route>
            <Route
              path="/employees/delete/:id"
              exact
              element={<DeleteEmployeeContainer />}
            ></Route>
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
