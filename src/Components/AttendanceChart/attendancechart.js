import axios from "axios"
import "./attendancechart.css"
import { useEffect, useState } from "react"

function AttendanCechart() {
    const [state, setstate] = useState([])
    const [up, setup] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/attendance')
            .then((res) => {
                setstate(res.data)
                console.log("assas");


            })
        console.log(state);


    }, [])

    function submit() {
        const Sattaendance = state.filter((arr) => {
            return (
                arr.studentId == sessionStorage.studentid
            )

        })
        setup(Sattaendance)
        console.log(Sattaendance);
    }

    return <>
        <button className="Check-Attendance" onClick={submit}>Check Attendance</button>
        <br />
        {
            up.map((ele) => {
                return (
                    <>
                     <span>{ele.date}</span>    <div className={ele.status == "Present" ? "present" : "apsent"}></div>
                       
                    </>
                )
            })
        }


    </>

}
export default AttendanCechart



/////1