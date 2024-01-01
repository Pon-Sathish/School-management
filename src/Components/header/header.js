import { Button, Card } from "react-bootstrap";
import "./header.css";
import 'react-bootstrap'
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";




function Header() {


    const navigateadmin = useNavigate()
    const Adminlogin = () => {
        navigateadmin("/Adminlogin")
    }
    const navigateteacher = useNavigate()
    const Teacherlogin = () => {
        navigateteacher("/Teacherlogin")
    }
    const navigatestudent = useNavigate()
    const Studentlogin = () => {
        navigatestudent("/Studentlogin")
    }
    return <>
        <div id="nav">
            <img id="logo" src={require("../images/logo.png")}></img>
            <Button id="Admin" variant="light" onClick={Adminlogin}>Admin</Button>{' '}
            <Button id="Student" variant="light" onClick={Studentlogin} >Student</Button>{' '}
            <Button id="Teacher" variant="light" onClick={Teacherlogin} >Teacher</Button>{' '}
        </div>
    </>
}
export default Header