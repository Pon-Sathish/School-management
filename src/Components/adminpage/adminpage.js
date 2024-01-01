import { useNavigate } from "react-router-dom";
import "./adminpage.css";
import React, { useEffect, useState, } from 'react';
// import TemplateDemo from "../AddTeacher/teachertable";
import PaginatorBasicDemo from "../AddTeacher/teachertable";
import axios from "axios";



function Adminpage() {
    let [btn, setBtn] = useState('Check In')
    let navigate = useNavigate()
    function selva() {
        if (btn === 'Check In') {
            setBtn('CheckOut')
        }
        else { }
        if (btn === 'CheckOut') {
            setBtn('Check In')
        }
        else { }
    }
    function Addteacher() {
        navigate('/addteacher')
    }
    function Addstudent() {
        navigate('/addstudent')
    }
    const [leave, setleave] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/ApplyLeave')
            .then((res) => {
                setleave(res.data)

            })
    })
    // 2

    return <>
        <div className="admin-css">
            <div id="hi">
                <label>HI'Admin</label>
                <div className="img">
                    <img id="adminimg" src={require("../images/testimonials-5.jpg")}></img>
                </div>
                <div className="admin-buttons">
                    <div><button value={btn} onClick={selva} id=
                        {btn === 'Check In' ? 'checkin' : 'checkout'}
                    >{btn}</button></div>
                    <div> <button id="teacher" onClick={Addteacher}>Add Teacher</button></div>
                    <div><button id="student" onClick={Addstudent}>Add Student</button></div>
                </div>

            </div>

            <div id="basicdemo">
                <PaginatorBasicDemo />
            </div>
        </div>

        <div className="Leave-Request">
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Reason</th>
                    <th>Aprovel</th>
                    {/* <th>Delete</th> */}
                </tr>
                {leave.map((ele) => {


                    function Snop() {
                        sessionStorage.setItem("swer", ele.id)
                    }
                    function Aprovel() {
                        Snop()
                        axios.delete(`http://localhost:3001/ApplyLeave/${sessionStorage.swer} `)
                            .then((del) => {

                                console.log("delete", del);
                            })
                    }
                    return <tr>
                        <td><h3>{ele.id}.</h3></td>
                        <td><h3>{ele.name}</h3></td>
                        <td><h3>{ele.reason}</h3></td>
                        <td><button onClick={Aprovel}>Aprovel</button></td>
                        {/* <td><button>Delete</button></td> */}
                    </tr>
                })}

            </table>
        </div>

    </>
}
export default Adminpage
