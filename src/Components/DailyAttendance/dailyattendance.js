// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function DailyAttendance() {
//     const [students, setStudents] = useState([]);
//     const [teacher, setteacher] = useState([]);
//     const [final, setfinal] = useState([]);

//     useEffect(() => {


//         axios.get('http://localhost:3001/profile')
//             .then(response => {
//                 setStudents(response.data);
//                 console.log("sucess");

//             })
//             .catch(error => {
//                 console.error("Error fetching students data:", error);
//             });

//         axios.get(' http://localhost:3001/comments')
//             .then((res) => {
//                 setteacher(res.data)
//                 console.log("sucess");

//             })
//             .catch((err) => {
//                 console.log('error check please try again');
//             })



//     }, []);




//     const markAttendance = (studentId, status) => {

//         axios.post('http://localhost:3001/attendance', {
//             studentId,
//             status,
//             date: new Date().toISOString()
//         })
//             .then(response => {

//                 console.log(`Attendance marked for student ${studentId} with status ${status}`);
//             })
//             .catch(error => {
//                 console.error("Error marking attendance:", error);
//             });
//     };

//     const Myclass = () => {
//         const identy = teacher.find((arr) => {

//             return arr.id == sessionStorage.teacherid

//         })
//         const iden = students.filter((arr) => {
//             return arr.class === identy.class

//         })
//         console.log(identy);
//     }

//     Myclass();






//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Class</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {

//                         iden.map(student => (
//                             <tr key={student.id}>
//                                 <td>{student.id}</td>
//                                 <td>{student.name}</td>
//                                 <td>{student.class}</td>
//                                 <td>
//                                     <button onClick={() => markAttendance(student.id, 'Present')}>P</button>
//                                     <button onClick={() => markAttendance(student.id, 'Absent')}>A</button>
//                                 </td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// export default DailyAttendance;




////1

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function DailyAttendance() {
//     const [students, setStudents] = useState([]);
//     const [teacherClass, setTeacherClass] = useState("");

//     useEffect(() => {
//         // Fetch teacher class information
//         axios.get('http://localhost:3001/comments')
//             .then(response => {
//                 setTeacherClass(response.data.class);
//             })
//             .catch(error => {
//                 console.error("Error fetching teacher data:", error);
//             });

//         // Fetch students based on teacher's class
//         axios.get(`http://localhost:3001/profile?class=${teacherClass}`)
//             .then(response => {
//                 setStudents(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching students data:", error);
//             });
//     }, [teacherClass]);

//     const markAttendance = (studentId, status) => {
//         axios.post('http://localhost:3001/attendance', {
//             studentId,
//             status,
//             date: new Date().toISOString()
//         })
//             .then(response => {
//                 console.log(`Attendance marked for student ${studentId} with status ${status}`);
//             })
//             .catch(error => {
//                 console.error("Error marking attendance:", error);
//             });
//     };

//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Class</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map(student => (
//                         <tr key={student.id}>
//                             <td>{student.id}</td>
//                             <td>{student.name}</td>
//                             <td>{student.class}</td>
//                             <td>
//                                 <button onClick={() => markAttendance(student.id, 'Present')}>P</button>
//                                 <button onClick={() => markAttendance(student.id, 'Absent')}>A</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// export default DailyAttendance;




/////2

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dailyattendance.css"

function DailyAttendance() {
    const [students, setStudents] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [iden, setIden] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/profile')
            .then(response => {
                setStudents(response.data);
                console.log("success fetching students");
            })
            .catch(error => {
                console.error("Error fetching students data:", error);
            });

        axios.get('http://localhost:3001/comments')
            .then((res) => {
                setTeacher(res.data);
                console.log("success fetching teacher");
            })
            .catch((err) => {
                console.log('Error fetching teacher data:', err);
            });

    }, []);

    useEffect(() => {
        const getStudentsByClass = () => {
            const identy = teacher.find((arr) => arr.id == sessionStorage.teacherid);
            const idenFiltered = students.filter((arr) => arr.class === identy.class);
            setIden(idenFiltered);
            console.log(identy);
        };

        if (teacher.length > 0 && students.length > 0) {
            getStudentsByClass();
        }
    }, [teacher, students]);

    const markAttendance = (studentId, name, status) => {
        axios.post('http://localhost:3001/attendance', {
            studentId,
            status,
            name,
            date: new Date().toLocaleDateString()
        })
            .then(response => {
                console.log(`Attendance marked for student ${studentId} with status ${status}`);
            })
            .catch(error => {
                console.error("Error marking attendance:", error);
            });
    };

    return (
        <>
            <table className="Student-Attendance">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {iden.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>
                                <button onClick={() => markAttendance(student.id, student.name, 'Present')}>Present</button>
                                <button onClick={() => markAttendance(student.id, student.name, 'Absent')}>Absent</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DailyAttendance;