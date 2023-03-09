import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';

import authService from "../authentication/services/AuthenticationService";

function StudentExam(props) {

    const { name } = useParams();

    const [allExam, setAllExam] = useState([]);

    const [result, setResult] = useState([]);

    const user = authService.getCurrentUser();

    useEffect(() => {
        async function getAllExams() {
            const value = await axios.get(`http://localhost:8002/exam/getExamOnSubjectName/${name}`);

            setAllExam(value.data);
        }
        getAllExams();
    }, []);
    useEffect(() => {
        async function getUserResults() {
            const value = await axios.get(`http://localhost:8002/result/resultForStudent/${user.username}`);
            setResult(value.data);
        }
        getUserResults();
    }, [])

    const navigate = useNavigate();
    const goBack = () => {
        navigate("/studentSubject");
    }

    return (
        <>
            <div>
                <h1>All {name} Exams</h1>
                {console.log(useParams())}
                {console.log(name)}
            </div>
            {
                allExam.map((data, i) => {
                    let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
                    if (!val) {
                        return (
                            <div className="card m-2" style={{"background-color":"transparent"}} key={i}>
                                <div className="card card-header align-items-center" style={{"background-color":"transparent"}}> <span><h3>{data.examName}</h3></span> </div>
                                <div> <span><b>Exam ID : </b>{data.id}</span> </div>
                                <div> <span><b>Subject : </b>{data.subject.name}</span> </div>
                                <div> <span><b>Exam Description : </b>{data.desc}</span> </div>
                                <div><span><b>Date : </b>{data.date}</span> </div>

                                <div className="card card-footer align-items-center" style={{"background-color":"transparent"}}>
                                    <Link to={`/test/${name}/${data.id}/${data.subject.id}`}>
                                        <button className="btn btn-info">Attempt</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="card m-2" key={i} style={{"background-color":"transparent"}}>
                                <div className="card card-header align-items-center" style={{"background-color":"transparent"}}> <span><h3>{data.examName}</h3></span> </div>
                                <div> <span><b>Exam ID : </b>{data.id}</span> </div>
                                <div> <span><b>Subject : </b>{data.subject.name}</span> </div>
                                <div> <span><b>Exam Description : </b>{data.desc}</span> </div>
                                <div><span><b>Date : </b>{data.date}</span> </div>

                                <div className="card card-footer align-items-center" style={{"background-color":"transparent"}}>
                                    {/* <Link to={`/test/${name}/${data.id}/${data.subject.id}`}> */}
                                    <button className="btn btn-secondary" disabled>Already Attempted</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        );
                    }

                })
            }
            <button className="btn btn-outline-primary" onClick={goBack}>Go Back</button>
        </>
    );
}

export default StudentExam;