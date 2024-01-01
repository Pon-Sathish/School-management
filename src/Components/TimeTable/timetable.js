import axios from 'axios';
import './timetable.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
function TimeTable() {
    const [timeTable, setTimeTable] = useState([])
    // const [final, setfinal] = useState([])

    const { name } = useParams()
    let today = new Date().getDay();
    let dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayIndex = new Date().getDay();
    let todays = dates[todayIndex];
    
    useEffect(() => {
        axios.get('http://localhost:3001/TimeTable')
            .then((res) => {
                setTimeTable(res.data)
                // console.log(res.data);
            })
            .catch((err) => {
                console.log("error", err);
            })




    }, [])
    let table = {};

    if (timeTable && timeTable.length !== 0 && timeTable[0].Periods) {
        // Replace 'name' with a valid condition based on your data structure
        table = timeTable.find((e) => e.name === name);
    }
    console.log(table);
    let output = table.Periods ? table.Periods[today] || {} : {};

    // function under() {
    //     console.log(timeTable);
    //     const result = timeTable.map((ele) => {
    //         return ele.Periods
    //     })
    //     setfinal(result)
    //     console.log(final)
    // }
    // under()

    const number = 0

    return <>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Day</th>
                    <th>I</th>
                    <th>II</th>
                    <th>III</th>
                    <th>IV</th>
                    <th>V</th>
                    <th>VI</th>
                    <th>VII</th>
                    <th>VIII</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{number + 1}</td>
                    <td>{todays}</td>
                    <td>{output.one}</td>
                    <td>{output.two}</td>
                    <td>{output.three}</td>
                    <td>{output.four}</td>
                    <td>{output.five}</td>
                    <td>{output.six}</td>
                    <td>{output.seven}</td>
                    <td>{output.eight}</td>
                </tr>
                {today === 0 || today === 6 ? (
                    <h6 className="leave">
                        -----------------------------------------------------------Today is a Leave
                        day---------------------------------------------------------------
                    </h6>
                ) : null}




            </tbody>
        </table>
    </>
}
export default TimeTable



