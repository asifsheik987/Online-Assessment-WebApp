import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';

import authService from "../authentication/services/AuthenticationService";
import { getExamBySubject } from "../redux/slices/examSlice";
import { getStudentResult } from "../redux/slices/ResultSlice"

function StudentExam(props) {

    const { name } = useParams();

    const allExam = useSelector(state => state.exam.selectedExam)

    const result = useSelector(state => state.result.resultList);

    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExamBySubject(name));
    }, []);
    useEffect(() => {
        dispatch(getStudentResult(user.username));
    }, [])

    const navigate = useNavigate();
    const goBack = () => {
        navigate("/studentSubject");
    }

    return (
        <>
            <div className="container my-4">
                <h1 className="text-center mb-4">All {name} Exams</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        allExam.map((data, i) => {
                            let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
                            if (val) {
                                return (
                                    <div className="col" key={i}>
                                        <div className="card border border-3 border-secondary h-100">
                                            <div className="card-header bg-secondary text-white text-center"><h3>{data.examName}</h3></div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <b>Exam ID:</b> {data.id}<br />
                                                    <b>Subject:</b> {data.subject.name}<br />
                                                    <b>Description:</b> {data.desc}<br />
                                                    <b>Date:</b> {data.date}
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent">
                                                <div className="text-center">
                                                    <button className="btn btn-secondary" disabled>Already Attempted</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="col" key={i}>
                                        <div className="card border border-3 border-primary h-100">
                                            <div className="card-header bg-primary text-white text-center"><h3>{data.examName}</h3></div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <b>Exam ID:</b> {data.id}<br />
                                                    <b>Subject:</b> {data.subject.name}<br />
                                                    <b>Description:</b> {data.desc}<br />
                                                    <b>Date:</b> {data.date}
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent">
                                                <div className="text-center">

                                                    <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
                                                        <button className="btn btn-primary">Attempt</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                        })
                    }
                </div></div>
            <button className="btn btn-outline-primary" onClick={goBack}>Go Back</button>
        </>
    );
}

export default StudentExam;