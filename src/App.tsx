import { Route, Routes } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Patients from "@/components/Patients";

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />} path="/" />
      <Route element={<Patients />} path="/patients" />
    </Routes>
  );
}

export default App;
