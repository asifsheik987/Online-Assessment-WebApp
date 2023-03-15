import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentResult } from "../redux/slices/ResultSlice";


function Result() {

    const results = useSelector(state=>state.result.resultList);

    const { username } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentResult(username));
    }, [dispatch]);

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
                <table className="table table-hover">
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
                                    <tr className={data.status === 'Fail' ? 'text-danger' : 'text-success'} key={i}>
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