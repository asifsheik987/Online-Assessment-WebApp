import { useState, useEffect } from "react";
import axios from "axios";

import { Link, NavLink } from "react-router-dom";


function StudentSubject() {

    const [allSubject, setAllSubject] = useState([]);

    useEffect(() => {
        async function getAllSubject() {
            let value = await axios.get(`http://localhost:8002/subjects/allSubjects`);
            setAllSubject(value.data);
        }
        getAllSubject();
    }, [])


    return (
        <div>
            <div>
                <h1>Choose Subjects</h1>
            </div>
            <div className="flex flex-shrink justify-content" style={{"background-color":"transparent"}}>
                {
                    allSubject.map((data, i) => {
                        return (

                            <div className="card m-3" key={i} style={{"background-color":"transparent"}}>
                                <div className="card-header" style={{"background-color":"transparent"}}>
                                    <span><b>{data.name}</b></span>
                                </div>

                                <div className="card card-footer" style={{"background-color":"transparent"}} >
                                    <Link to={`/studentExam/${data.name}`}>
                                        <button className="btn btn-outline-info">Go to Exam</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StudentSubject;