
import "./teachertable.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function PaginatorBasicDemo() {



    const [data, setdata] = useState([]);
    const [visible, setVisible] = useState(false);
    const [changemobile, setchangemobile] = useState("");
    const [changeemail, setchangeemail] = useState("");
    const [errchangemobile, seterrchangemobile] = useState("");
    const [errchangeemail, seterrchangeemail] = useState("");

    // const [errNum, seterrNum] = useState("");
    // const [errno, seterrno] = useState("");

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
        <table>
            <tr className="table-row">
                <th>Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>Edit/Delete</th>
            </tr>
            {
                data.map((ele) => {

                    function edit() {
                        sessionStorage.setItem("id", ele.id)
                        console.log(sessionStorage.id);

                        setVisible(true)

                    }
                    function elementdelete() {
                        console.log('happy');
                        sessionStorage.setItem("delete", ele.id)
                        axios.delete(`http://localhost:3001/comments/${sessionStorage.delete}`)
                            .then(() => {
                                console.log('succes');
                                window.location.reload()
                            })
                    }



                    return (
                        <>
                            <tr className="table-row-2" key={ele.id}>
                                <td>{ele.name}</td>
                                <td>{ele.dob}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.mobile}</td>
                                <td>{ele.email}</td>
                                <td>{ele.address}</td>
                                <td className="edit-delete">
                                    <button id="ed" onClick={edit}><FaRegEdit /></button>
                                    <button id="de" onClick={elementdelete} ><MdDelete /></button>
                                </td>

                            </tr>
                        </>
                    )
                })
            }
        </table>
    </>


}