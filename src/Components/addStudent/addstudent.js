import { useState } from "react";
import React, { useRef } from 'react';
import "./addstudent.css"
import axios from "axios"
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function Addstudent() {

    //button
    const toast = useRef(null);
    //
    const [name, setname] = useState("")
    const [dob, setdob] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [fname, setfname] = useState("")
    const [mname, setmname] = useState("")
    const [mobile, setmobile] = useState("")

    //error
    const [errname, seterrname] = useState("")
    const [errdob, seterrdob] = useState("")
    const [errgender, seterrgender] = useState("")
    const [errage, seterrage] = useState("")
    const [errfname, seterrfname] = useState("")
    const [errmname, seterrmname] = useState("")
    const [errmobile, seterrmobile] = useState("")
    const [errNum, seterrNum] = useState("")
    const [errno, seterrno] = useState("")

    //validaction
    const Num = /[0-9]/;
    const no = /^\d{10}$/;


    function showSuccess() {
        if (name === "" || name === undefined) {
            seterrname("Pleace Enter The Name")
        }
        else {
            seterrname("")
        }
        if (dob === "" || dob === undefined) {
            seterrdob("Pleace Enter The Dob")
        }
        else {
            seterrdob("")
        }
        if (gender === "" || gender === undefined) {
            seterrgender("Pleace Enter The Gender")
        }
        else if (gender === "Gender") {
            seterrgender("Pleace select the crroct option")
        }
        else {
            seterrgender("")
        }
        if (age === "" || age === undefined) {
            seterrage("Pleace Enter The Age")
        }
        else {
            seterrage("")
        }
        if (fname === "" || fname === undefined) {
            seterrfname("Pleace Enter The Father Name")
        }
        else {
            seterrfname("")
        }
        if (mname === "" || mname === undefined) {
            seterrmname("Pleace Enter The Mother Name")
        }
        else {
            seterrmname("")
        }
        if (mobile === "" || mobile === undefined) {
            seterrmobile("Pleace Enter The Mobile Number")
        }
        else {
            seterrmobile("")
        }
        if (!Num.test(mobile)) {
            seterrNum("Invalid Mobile Number")
        }
        else {
            seterrNum("")
        }
        if (!no.test(mobile)) {
            seterrno("Type A 10 Digit Number ")
        }
        else {
            seterrno("")
        }

        //store
        if (name !== "" && dob !== "" && gender !== "" && age !== "" && fname !== "" && mname !== "" && mobile != "" && no.test(mobile)) {
           axios.post('http://localhost:3001/profile', { name: name, dob: dob, gender: gender, age: age, fname: fname, mname: mname, mobile: mobile })
                .then(() => {
                    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
               
                })
                window.location.reload()
        }
        
    }

    return <>

        <div id="div">
            <div id="addstudent">
                <h5 id="add">Adding New Student</h5>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <p>{errname}</p>
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setdob(e.target.value)}
                />
                <p>{errdob}</p>
                <select
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                >
                    <option>Gender</option>
                    <option>Others</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <p>{errgender}</p>
                <input
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                />
                <p>{errage}</p>
                <input
                    placeholder="Father Name"
                    value={fname}
                    onChange={(e) => setfname(e.target.value)}
                />
                <p>{errfname}</p>
                <input
                    placeholder="Mother Name"
                    value={mname}
                    onChange={(e) => setmname(e.target.value)}
                />
                <p>{errmname}</p>
                <input
                    placeholder="Mobile Number"
                    type="number"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                />
                <p>{errmobile}{errNum}{errno}</p>
                <Toast ref={toast} />
                <Button label="Success" className="p-button-success" onClick={showSuccess} />
                {/* <button onClick={Submit}>Save</button> */}
            </div>
        </div>

    </>
}
export default Addstudent