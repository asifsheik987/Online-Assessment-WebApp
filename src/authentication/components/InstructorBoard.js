import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams ,NavLink, Link, useNavigate } from 'react-router-dom';
import { getAllExams } from "../../redux/slices/examSlice";
import "./InstructorBoard.css"

function InstructorBoard(props) {

    const allExam = useSelector(state=>state.exam.examList);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllExams());
    }, []);

    
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <h1>All exams</h1>
            </div>
            <hr/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap">
                            
            {
                allExam.map((data, i) => {
                    // return (
                    //     <div className="card m-2" style={{"background-color":"transparent"}} key={i}>
                    //         <div className="card card-header align-items-center" style={{"background-color":"transparent"}}> <span><h3>{data.examName}</h3></span> </div>
                    //         <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam ID : </b>{data.id}</span> </div>
                    //         <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Subject : </b>{data.subject.name}</span> </div>
                    //         <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam Description : </b>{data.desc}</span> </div>
                    //         <div className=" ms-2" style={{"background-color":"transparent"}}><span><b>Date : </b>{data.date}</span> </div>
            
                    //         <div className="card card-footer align-items-center" style={{"background-color":"transparent"}}>
                    //           <Link to={`/allExam`}>
                    //              <button className="btn btn-info">Details</button>
                    //            </Link>
                    //         </div>
                    //     </div>
                    // );

                    return (
                        <Card id='card-body' key={i} style={{ "background-color": "transparent" }}>
                            <div className="text-center">
                            <Card.Title><b>{data.examName}</b></Card.Title>
                            </div><hr/>
                           <div>
                              <Card.Body>
                                 <div className='d-flex justify-content-around flex-column'>
                                    <Card.Text> 
                                        <b>subject:</b> {data.subject.name} <br/>
                                        <b>Exam Description:</b> {data.desc}<br/>
                                        <b>Date:</b> {data.date}<br/>
                                         
                                    </Card.Text>
                                    <Link type="button" className="btn btn-sm btn-outline-primary "
                                    to={`/allExam`} ><b>Details</b></Link>
                                    {/* <Card.Text><b>Exam Description:</b> {data.desc}</Card.Text>
                                    <Card.Text><b>Date:</b> {data.date}</Card.Text><hr/> */}
                                 </div>
                              </Card.Body>
                              {/* <Card.Footer>
                              <div className='d-flex justify-content-around'>
                                 <Link type="button" className="btn btn-lg btn-block btn-primary mt-auto"
                                    to={`/allExam`} ><b>Details</b></Link> 
                              </div>
                              </Card.Footer> */}
                              <br />
                           </div>

                        </Card>
                     )


                })
            }
            </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default InstructorBoard;

