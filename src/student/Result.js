import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Result() {

    const [results, setResults] = useState([]);

    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllResults() {
            let value = await axios.get(`http://localhost:8002/result/resultForStudent/${username}`)

            setResults(value.data);
            console.log(value.data);
        }
        getAllResults();
    }, []);

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate("/studentSubject");
    }
    const handleSolutions = (e, examId, examName) => {
        e.preventDefault();
        navigate(`/examSolutions/${examId}/${examName}`)
    }


    return (
        <>
            <div>
                <h2>Student Exam List</h2>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Exam Name</th>
                            <th>Subject</th>
                            <th>Exam Date</th>
                            <th>Result Status</th>
                            <th>Your Score</th>
                            <th>Total Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            results.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.user.username}</td>
                                        <td>{data.exam.examName}</td>
                                        <td>{data.subject.name}</td>
                                        <td>{data.exam.date}</td>
                                        <td><b>{data.status}</b></td>
                                        <td>{data.score}</td>
                                        <td>{data.totalMarks}</td>
                                        <td>
                                            <button className="btn btn-outline-info" onClick={(e) => handleSolutions(e, data.exam.id, data.exam.examName)} >View Solutions</button>
                                        </td>
                                    </tr>
                                );

                            })
                        }

                    </tbody>
                </table>
                <button className="btn btn-outline-danger" onClick={e => handleGoBack(e)}>Go back</button>
            </div>
        </>
    );
}

export default Result;