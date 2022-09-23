import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Portal from "./Component/Fixed/Portal";
import Dashboard from "./Component/Dashboard/Dashboard";
import Teacher from "./Component/Teacher/Teacher";
import CreateTeacher from "./Component/Teacher/CreateTeacher";
import ViewTeacher from "./Component/Teacher/ViewTeacher";
import EditTeacher from "./Component/Teacher/EditTeacher";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portal />}>
              <Route index element={<Dashboard />} />

            
              <Route path="Teacher" element={<Teacher />} />
              <Route path="Teacher/New_teacher" element={<CreateTeacher />} />
              <Route path="Teacher/ViewTeacher/:id" element={<ViewTeacher />} />
              <Route path="Teacher/EditTeacher/:id" element={<EditTeacher />} />
            </Route>
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
