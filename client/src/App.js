import { Route, Routes } from "react-router-dom";
import "./App.css";
import Employee from "./components/Employee";
import Employessedit from "./components/Employessedit";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/employesedit/:id" element={<Employessedit/>}/>
      </Routes>
    </div>
  );
}

export default App;
