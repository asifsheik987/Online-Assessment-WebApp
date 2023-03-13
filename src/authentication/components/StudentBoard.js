import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';
import { getAllExams } from "../../redux/slices/examSlice";
import { getStudentResult } from "../../redux/slices/ResultSlice";
import authService from "../services/AuthenticationService";

function StudentBoard(props) {

  const allExam = useSelector(state => state.exam.examList);

  const result = useSelector(state => state.result.resultList);
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getAllExams());
  }, []);

  useEffect(() => {
    dispatch(getStudentResult(user.username));
  }, [])
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>All Available exams</h1>
      </div>
      {
        allExam.map((data, i) => {
          let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
          console.log(val);
          if (!val) {
            return (
              <div className="card m-2" key={i} style={{ "background-color": "transparent" }}>
                <div className="card card-header align-items-center" style={{ "background-color": "transparent" }}> <span><h3>{data.examName}</h3></span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Exam ID : </b>{data.id}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Subject : </b>{data.subject.name}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Exam Description : </b>{data.desc}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}><span><b>Date : </b>{data.date}</span> </div>

                <div className="card card-footer align-items-center" style={{ "background-color": "transparent" }}>
                  <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
                    <button className="btn btn-info">Attempt</button>
                  </Link>
                </div>
              </div>
            );
          }
          else {
            return (
              <div className="card m-2" key={i} style={{ "background-color": "transparent" }}>
                <div className="card card-header align-items-center" style={{ "background-color": "transparent" }}> <span><h3>{data.examName}</h3></span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Exam ID : </b>{data.id}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Subject : </b>{data.subject.name}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}> <span><b>Exam Description : </b>{data.desc}</span> </div>
                <div className=" ms-2" style={{ "background-color": "transparent" }}><span><b>Date : </b>{data.date}</span> </div>

                <div className="card card-footer align-items-center" style={{ "background-color": "transparent" }}>
                  {/* <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}> */}
                  <button className="btn btn-secondary" disabled>Already Attempted</button>
                  {/* </Link> */}
                </div>
              </div>
            );
          }

        })
      }
      {/* <button className="btn btn-outline-primary" onClick={goBack}>Go Back</button> */}
    </>
  );
}

export default StudentBoard;

