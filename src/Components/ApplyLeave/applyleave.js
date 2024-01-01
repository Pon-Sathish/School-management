import { useState } from "react"
import "./applyleave.css"
import axios from "axios"

function Applyleave() {

    const [name, setname] = useState("")
    const [reason, setreason] = useState("")
    const [errname, seterrname] = useState("")
    const [errreason, seterrreason] = useState("")
    function submit() {
        if (name === "" || name === undefined) {
            seterrname("Pleace Enter Your Name")
        }
        if (reason === "" || reason === undefined) {
            seterrreason("Pleace Enter The Reason")
        }

        ////json store
        if (name !== "" && reason !== "") {
            axios.post('http://localhost:3001/ApplyLeave', { name: name, reason: reason })
                .then(() => {
                    console.log("Happy");
                    window.location.reload()
                    sessionStorage.setItem("id",)
                })

        }
    }
    return <>
        <input className="Name-input" placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)} />
        <br />
        <p>{errname}</p>
        <br />
        <input className="Reason-input" placeholder="Reason"
            value={reason}
            onChange={(e) => setreason(e.target.value)} />
        <br />
        <p>{errreason}</p>
        <br />
        <button className="Leave-Button" onClick={submit}>Submit</button>
    </>
}
export default Applyleave