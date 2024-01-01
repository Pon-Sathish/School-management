import "./teacherpage.css";
import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import Applyleave from "../ApplyLeave/applyleave";

function Teacherpage() {

    const {name}=useParams()

    // const [data, setdata] = useState([])
    const [data, setdata] = useState([]);
    const [visible, setVisible] = useState(false);
    const [changemobile, setchangemobile] = useState("");
    const [changeemail, setchangeemail] = useState("");
    const [errchangemobile, seterrchangemobile] = useState("");
    const [errchangeemail, seterrchangeemail] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/comments')
            .then((res) => {
                const dt = res.data;
                setdata(dt);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    let teacher = data.filter((ers) => {
        return ers.id == sessionStorage.teacherid
    })
    let navigate = useNavigate()

    function DailyAttendance() {
        navigate('/DailyAttendance')

    }
    function TimeTable(){
        navigate('/TimeTable/' + name)
    }
    function Applyleave(){
        navigate('/Applyleave')
    }
    const footerContent = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Submit" icon="pi pi-check" onClick={Submit} autoFocus />
        </div>
    );

    function Submit() {
        if (changemobile === "" || changemobile === undefined) {
            seterrchangemobile("Change your correct mobile number")
        }
        else if (!Num.test(changemobile)) {
            seterrchangemobile("Invalid mobile number")
        }
        else if (!no.test(changemobile)) {
            seterrchangemobile("Type a 10 digit number")
        }
        else {
            seterrchangemobile("")
        }

        if (changeemail === "" || changeemail === undefined) {
            seterrchangeemail("Change your correct email")
        }
        else if (!regex.test(changeemail)) {
            seterrchangeemail("Invalid email")
        }
        else {
            seterrchangeemail("")
        }

        if (changemobile != "" && changeemail != "" && regex.test(changeemail) && Num.test(changemobile) && no.test(changemobile)) {
            axios.patch(`http://localhost:3001/comments/${sessionStorage.id}`, { mobile: changemobile, email: changeemail })
                .then(response => {
                 

                    if (true) {
                        setchangeemail("")
                        setchangemobile("")
                        setVisible(false)
                        function timing() {
                            window.location.reload()
                        }
                        setTimeout(timing, 3000)
                    }


                })
                .catch(error => {
                    
                    console.error(error);
                });
        }

    }




    //validaction

    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const Num = /[0-9]/;
    const no = /^\d{10}$/;


    useEffect(() => {
        axios.get('http://localhost:3001/comments')
            .then((res) => {
                setdata(res.data)

            })
    }, [])


    return <>
        <div className="card flex justify-content-center">

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <InputText
                    placeholder="Change Mobile"
                    type="number"
                    value={changemobile}
                    onChange={(e) => setchangemobile(e.target.value)}
                />
                <p>{errchangemobile}</p>
                <InputText
                    placeholder="Change Email"
                    type="email"
                    value={changeemail}
                    onChange={(e) => setchangeemail(e.target.value)}
                />
                <p>{errchangeemail}</p>
            </Dialog>
        </div>

        <div className="teacher-page">
            <div className="teacher-nav-page">
                <div className="nav-buttons" >

                    <div><button>Check in</button></div>
                    <div> <button onClick={DailyAttendance}>Daily attendance</button></div>
                    <div><button onClick={Applyleave}>Apply leave</button></div>
                    <div><button onClick={TimeTable}>Time table</button></div>

                </div>
            </div>
            <div className="teacher-card">
                <div className="header">
                    <div className="ic">
                        <div className="header-icon">
                            <i><RiAdminFill /></i>
                        </div>
                    </div>
                    <div className="teacher-details">

                        {
                            teacher.map((ele) => {
                           
                                return (
                                    <>
                                        <p>Name : {ele.name}</p>
                                        <p>Age : {ele.age}</p>
                                        <p>Mobile : {ele.mobile}</p>
                                        <p>Dob : {ele.dob}</p>
                                        <p>Gender : {ele.gender}</p>
                                        <p>Email : {ele.email}</p>
                                        <p>Address : {ele.address}</p>
                                        <p>Qualification : {ele.qualification}</p>
                                    </>
                                )
                            })
                        }


                    </div>
                    <div className="bu">
                        <button className="teacher-edit" onClick={() => setVisible(true)}>Edit</button>
                    </div>
                </div>

            </div>


        </div>
    </>
}
export default Teacherpage