import axios from "axios";
//import { get } from "immer/dist/internal";
import React, { useState, useEffect } from 'react';
import { useParams ,NavLink, Link, useNavigate } from 'react-router-dom';
import authService from "../services/AuthenticationService";

function InstructorBoard(props) {

    //const {name} = useParams();

    const [allExam, setAllExam] = useState([]);

    useEffect(() => {
        async function getAllExams() {
            const value = await axios.get(`http://localhost:8002/exam/allExams`);
            
            setAllExam(value.data);
        }
        getAllExams();
    }, []);

    
    const navigate = useNavigate();
    // const goBack=()=>{
    //     navigate("/studentSubject");
    // }

    return (
        <>
            <div>
                <h1>All exams</h1>
            </div>
            {
                allExam.map((data, i) => {
                    return (
                        <div className="card m-2" key={i}>
                            <div className="card card-header align-items-center"> <span><h3>{data.examName}</h3></span> </div>
                            <div className=" ms-2"> <span><b>Exam ID : </b>{data.id}</span> </div>
                            <div className=" ms-2"> <span><b>Subject : </b>{data.subject.name}</span> </div>
                            <div className=" ms-2"> <span><b>Exam Description : </b>{data.desc}</span> </div>
                            <div className=" ms-2"><span><b>Date : </b>{data.date}</span> </div>
            
                            <div className="card card-footer align-items-center">
                              <Link to={`/allExam`}>
                                 <button className="btn btn-info">Details</button>
                               </Link>
                            </div>
                        </div>
                    );

                })
            }
            {/* <button className="btn btn-outline-primary" onClick={goBack}>Go Back</button> */}
        </>
    );
}

export default InstructorBoard;

