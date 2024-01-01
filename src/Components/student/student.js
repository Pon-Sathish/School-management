import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Studentlogin() {


    const [userName, setUserName] = useState('');
    const [dob, setDOB] = useState('');
    const [errusername, seterrusername] = useState("");
    const [errdob, seterrdob] = useState("");
    const [get, setget] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3001/profile')
            .then((res) => {
                setget(res.data)

                console.log(get);
            })
    }, [])

    function login() {
        get.map((arr) => {

            if (arr.name === userName && arr.dob === dob) {
                navigate('/Studentpage')
                sessionStorage.setItem("studentid", arr.id)
            }
        })
    }

    function submit() {
       
        if (userName === "" || userName === undefined) {
            seterrusername("The Username  Is Required")
        }
        else {
            seterrusername("")
        }
        if (dob === "" || dob === undefined) {
            seterrdob(" Dob Is Required")
        }
        else {
            seterrdob("")
        }
        if (userName != "" && dob != "") {
            login()
        }
    }

    return <>
        <div id="body">

            <div className="parent">
                <div className="child"><h3>Login</h3></div>
                <input id="user"
                    type="text"
                    placeholder="Enter User Name"
                    value={userName} onChange={(e) => setUserName(e.target.value)} />
                <br />
                <small style={{ color: "red" }}>{errusername}</small>

                <input type="date"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)} />
                <br />
                <small style={{ color: "red" }}>{errdob}</small>

                <button type="submit" onClick={submit}>Log in</button>
            </div>

        </div>
    </>
}
export default Studentlogin