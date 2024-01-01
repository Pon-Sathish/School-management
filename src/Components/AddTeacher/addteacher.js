import { useEffect, useState } from "react"
import axios from 'axios'
import "./addteacher.css"
function Addteacher() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [gender, setgender] = useState("")
    const [dob, setdob] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [select, setselect] = useState("")
    const [adress, setadress] = useState("")

    // error

    const [errname, seterrname] = useState("")
    const [errage, seterrage] = useState("")
    const [errgender, seterrgender] = useState("")
    const [errdob, seterrdob] = useState("")
    const [errmobile, seterrmobile] = useState("")
    const [errNum, seterrNum] = useState("")
    const [errno, seterrno] = useState("")
    const [erremail, seterremail] = useState("")
    const [errselect, seterrselect] = useState("")
    const [erradress, seterradress] = useState("")

    // validaction
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // let mobilevalidate = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const Num = /[0-9]/;
    const no = /^\d{10}$/;

    function Handlesubmit() {

        if (name === "" || name === undefined) {
            seterrname("please enter the username!")
        }
        else {
            seterrname("")
        }
        if (age === "" || age === undefined) {
            seterrage("please enter the age")
        }
        else {
            seterrage("")
        }
        if (gender === "" || gender === undefined) {
            seterrgender("please enter the gender")
        }
        else if (gender === "Gender") {
            seterrgender("Pleace select the crroct option")
        }
        else {
            seterrgender("")
        }
        if (dob === "" || dob === undefined) {
            seterrdob("please enter the dob")
        }
        else {
            seterrdob("")
        }
        if (mobile === "" || mobile === undefined) {
            seterrmobile("please enter the mobile number")
        }
        else {
            seterrmobile("")
        }
        if (!Num.test(mobile)) {
            seterrNum("Type Number Only")
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
        if (email === "" || email === undefined) {
            seterremail("please enter the  email")
        }
        else if (!regex.test(email)) {
            seterremail("Invalid email address")
        }
        else {
            seterremail("")
        }
        if (select === "" || select === undefined) {
            seterrselect("please enter the select!")
        }
        else {
            seterrselect("")
        }
        if (adress === "" || adress === undefined) {
            seterradress("please enter the adress!")
        }
        else {
            seterradress("")

        }
        // store

        if (name != "" && age != "" && gender != "" && dob != "" && mobile != "" && email != "" && select != "" && adress != "") {

            axios.post('http://localhost:3001/comments', { name: name, age: age, gender: gender, dob: dob, mobile: mobile, email: email, qualification: select, address: adress })
                .then(() => {
                    console.log('sucessssfully');
                    window.location.reload();
                })


        }
    }
    return <>


        <div id="div">
            <div id="addteacher">
                <h5 id="add">Adding New Teacher</h5>
                <input placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <p>{errname}</p>
                <input placeholder="Age"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                />
                <p>{errage}</p>
                {/* <input placeholder="Gender"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
            /> */}
                <select
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}>
                    <option>Gender</option>
                    <option>Others</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <p>{errgender}</p>
                <input placeholder="D.O.B"
                    type="date"
                    value={dob}
                    onChange={(e) => setdob(e.target.value)}
                />
                <p>{errdob}</p>
                <input placeholder="Mobile No"
                    type="number"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                />
                <p>{errmobile}{errNum}{errno}</p>
                <input placeholder="E-Mail"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <p>{erremail}</p>
                <select
                    value={select}
                    onChange={(e) => setselect(e.target.value)}>

                    <option>Qualification</option>
                    <option>BA.Tamil</option>
                    <option>BA.English</option>
                    <option>B.sc Computer science</option>
                    <option>B.sc Maths</option>
                    <option>B.sc Physics</option>
                    <option>B.sc Botany</option>
                    <option>B.sc Zoology</option>
                    <option>B.sc Chemistry</option>
                    <option>B.sc Physical Education</option>
                    <option>B.Com</option>
                    <option>M.Com</option>
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>BBA</option>
                    <option>MBA</option>
                </select>
                <p>{errselect}</p>
                <input placeholder="Adress"
                    value={adress}
                    onChange={(e) => setadress(e.target.value)}
                />
                <p>{erradress}</p>
                <button onClick={Handlesubmit}>Save</button>
            </div>

        </div>

    </>
}
export default Addteacher