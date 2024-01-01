import "./studentpage.css"
import { RiAdminFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
function Studentpage() {


    const [state, setstate] = useState([])
    const [data, setdata] = useState([]);
    const [visible, setVisible] = useState(false);
    const [changemobile, setchangemobile] = useState("");
    const [changeemail, setchangeemail] = useState("");
    const [errchangemobile, seterrchangemobile] = useState("");
    const [errchangeemail, seterrchangeemail] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/profile')
            .then((ele) => {
                setstate(ele.data)
            })
    }, [])

    let student = state.filter((ass) => {
        return ass.id == sessionStorage.studentid
    })
    console.log(student);

    let navigate = useNavigate()

    function AttendanCechart() {
        navigate('/AttendanCechart')

    }
    // function TimeTable() {
    //     navigate('/TimeTable')
    // }
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
            axios.patch(`http://localhost:3001/profile/${sessionStorage.id}`, { mobile: changemobile, email: changeemail })
                .then(response => {
                    // Handle the response data here

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
                    // Handle errors here
                    console.error(error);
                });
        }

    }




    //validaction

    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const Num = /[0-9]/;
    const no = /^\d{10}$/;


    useEffect(() => {
        axios.get('http://localhost:3001/profile')
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

        <div className="teacher-page-stu">
            <div className="teacher-nav-page-stu">
                <div className="nav-buttons-stu" >

                    <div><button>Check in</button></div>
                    <div> <button onClick={AttendanCechart}>Attendance</button></div>
                    <div><button>Apply leave</button></div>/
                    <div><button>Time table</button></div>

                </div>
            </div>
            <div className="teacher-card-stu">
                <div className="header-stu">
                    <div className="ic-stu">
                        <div className="header-icon-stu">
                            <i><RiAdminFill /></i>
                        </div>
                    </div>
                    <div className="teacher-details-stu">
                        {
                            student.map((arr) => {
                                return (
                                    <>
                                        <div key={arr.id} >
                                            <p>Name : {arr.name}</p>
                                            <p>Dob : {arr.dob}</p>
                                            <p>Gender : {arr.gender}</p>
                                            <p>Father Name : {arr.fname}</p>
                                            <p>Mother Name : {arr.mname}</p>
                                            <p>Mobile : {arr.mobile}</p>
                                            <p>Age : {arr.age}</p>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                    <div className="bu-stu">
                        <button className="teacher-edit-stu" onClick={() => setVisible(true)}>Edit</button>
                    </div>
                </div>

            </div>


        </div>
    </>

}
export default Studentpage