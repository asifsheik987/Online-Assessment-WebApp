
import { useState, useEffect } from "react";
import axios from "axios";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../redux/slices/examSlice";
//import authService from "../authentication/services/AuthenticationService";


function AllExam() {


    const [exams, setExams] = useState([]);
    const dispatch  = useDispatch();
    // const {user} = useSelector((state)=>state.auth);
    // console.log(user);
    dispatch(getAllExams()).unwrap().then(
        (data)=>{
            setExams(data);
        }
    );


    // useEffect(() => {
        
    //     async function getAllExam() {
            
    //         let value = await axios.get(`http://localhost:8002/exam/allExams`);
    //         setExams(value.data);
    //         //console.log(value.data[0].name);
    //     }
    //     getAllExam();
    // }, []);
    


    // const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     async function getAllQuestions() {
    //         let value = await axios.get(`http://localhost:8002/questions/allQuestions`);
    //         setQuestions(value.data);
    //     }
    //     getAllQuestions();
    // }, [])


    return (
        <>
            <div>
                <h2>Exam List</h2>
            </div>

            <div >
                <table className="table table-bordered">
                    <thead >
                        <tr>
                            <th>Exam Name</th>
                            <th>Exam Desc.</th>
                            <th>Exam Creation Date</th>
                            <th>Subject</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exams.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.examName}</td>
                                        <td>{data.desc}</td>
                                        <td>{data.date}</td>
                                        <td>{data.subject.name}</td>
                                        <td>
                                            <Link to={`/examDetails/${data.id}`}>
                                                <button className="btn btn-outline-primary m-1">Details</button>
                                            </Link>

                                            <NavLink to={`/viewQuestion/${data.id}/${data.user.id}`}>
                                                <button className="btn btn-outline-primary m-1">View Questions</button>
                                            </NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>


        </>
    );
}

export default AllExam;