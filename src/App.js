// import logo from './logo.svg';
import './App.css';

import Addteacher from './Components/AddTeacher/addteacher';
import Applyleave from './Components/ApplyLeave/applyleave';
import AttendanCechart from './Components/AttendanceChart/attendancechart';
import DailyAttendance from './Components/DailyAttendance/dailyattendance';
import Studentpage from './Components/StudentPage/studentpage';
import Teacherpage from './Components/TeacherPage/teacherpage';
import TimeTable from './Components/TimeTable/timetable';
import Addstudent from './Components/addStudent/addstudent';
import Adminlogin from './Components/admin/admin';
import Adminpage from './Components/adminpage/adminpage';
import Studentlogin from './Components/student/student';
import Teacherlogin from './Components/teacher/teacher';
import Webpage from './Components/webpage/webpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Webpage />}></Route>
        <Route path='/Adminlogin' element={<Adminlogin />}></Route>
        <Route path='/Teacherlogin' element={<Teacherlogin />}></Route>
        <Route path='/Studentlogin' element={<Studentlogin />}></Route>
        <Route path='/Adminpage' element={<Adminpage />}></Route>
        <Route path='/Studentpage' element={<Studentpage />}></Route>
        <Route path='/Teacherpage/:name' element={<Teacherpage />}></Route>
        <Route path='/addteacher' element={<Addteacher />}></Route>
        <Route path='/addstudent' element={<Addstudent />} ></Route>
        <Route path='/DailyAttendance' element={<DailyAttendance />}></Route>
        <Route path='/AttendanCechart' element={<AttendanCechart />}></Route>
        <Route path='/TimeTable/:name' element={<TimeTable />}></Route>
        <Route path='/Applyleave' element={<Applyleave />}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;