import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentResult } from "../redux/slices/ResultSlice";


function StudentResult() {

    const results = useSelector(state => state.result.resultList);
    const { username } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentResult(username));
    }, []);

    const handleGoBack = (e) => {
        navigate("/students");
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
                            <th>Score</th>
                            <th>Total Marks</th>
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

export default StudentResult;