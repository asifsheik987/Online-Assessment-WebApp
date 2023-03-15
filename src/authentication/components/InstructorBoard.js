import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';
import { getAllExams } from "../../redux/slices/examSlice";
import { Card, Button } from 'react-bootstrap';

function InstructorBoard(props) {

    const allExam = useSelector(state => state.exam.examList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllExams());
    }, []);

    const navigate = useNavigate();

    return (
        // <div className="container">
        //     <div className="row">
        //         <h1>All exams</h1>
        //     </div>
        //     <hr />
        //     <br />
        //     <div className="row">
        //         {allExam.map((data, index) => {
        //             return (
        //                 <div key={index} className="col-md-4 mb-4 ">
        //                     <div className="card h-100 bg-info border border-3 bg-info text-white border-dark" style={{ backgroundColor: "transparent" }}>

        //                         <div className="card-header align-items-center " style={{ backgroundColor: "transparent" }}>

        //                             <h3 className="text-center">{data.examName}</h3>
        //                         </div>
        //                         <div className="card-body d-flex flex-column">
        //                             <div className="ms-2 flex-grow-1">
        //                                 <span><b>Exam ID : </b>{data.id}</span>
        //                             </div>
        //                             <div className="ms-2 flex-grow-1">
        //                                 <span><b>Subject : </b>{data.subject.name}</span>
        //                             </div>
        //                             <div className="ms-2 flex-grow-1">
        //                                 <span><b>Exam Description : </b>{data.desc}</span>
        //                             </div>
        //                             <div className="ms-2 flex-grow-1">
        //                                 <span><b>Date : </b>{data.date}</span>
        //                             </div>
        //                         </div>
        //                         <div className="card-footer align-items-center" style={{ backgroundColor: "transparent" }}>
        //                             <div className="text-center">
        //                             <Link to={`/allExam`}>
        //                                 <button className="btn btn-light text-info">Details</button>
        //                             </Link>
        //                             </div>
        //                         </div>
        //                     </div></div>
        //             )
        //         })}
        //     </div>
        // </div>



        /* <div className="container">
  <div className="row">
    <h1>All exams</h1>
  </div>
  <hr />
  <br />
  <div className="row">
    {allExam.map((data, index) => {
      return (
        <div key={index} className="col-md-4 mb-4 ">
          <Card style={{ border: 'none', borderRadius: 20, boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}>
            <div style={{ backgroundColor: '#0c2960', borderRadius: '20px 20px 0 0' }}>
              <Card.Header className="text-center" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {data.examName}
              </Card.Header>
            </div>
            <Card.Body>
              <Card.Title>Exam ID: {data.id}</Card.Title>
              <Card.Text>
                <b>Subject:</b> {data.subject.name}
              </Card.Text>
              <Card.Text>
                <b>Exam Description:</b> {data.desc}
              </Card.Text>
              <Card.Text>
                <b>Date:</b> {data.date}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: 'transparent', borderTop: 'none' }}>
              <div className="text-center">
                <Button variant="info" size="lg">
                  <Link to={`/allExam`} style={{ color: '#fff', textDecoration: 'none' }}>
                    Details
                  </Link>
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      );
    })}
  </div>
</div> */

        <div div className = "container" >
  <div className="row">
    <h1>All exams</h1>
  </div>
  <hr />
  <br />
  <div className="row">
    {allExam.map((data, index) => {
      return (
        <div key={index} className="col-md-4 mb-4 ">
          <Card className='bg-transparent border border-secondary border-3' style={{ height: '100%',borderRadius: '20px 20px 20px 20px' }}>
            <div style={{ backgroundColor: '#0c2960', borderRadius: '20px 20px 0 0' }}>
              <Card.Header className="text-center" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {data.examName}
              </Card.Header>
            </div>
            <Card.Body>
              {/* <Card.Title>Exam ID: {data.id}</Card.Title> */}
              <Card.Text>
                <b>Subject:</b> {data.subject.name}
              </Card.Text>
              <Card.Text>
                <b>Exam Description:</b> {data.desc}
              </Card.Text>
              <Card.Text>
                <b>Date:</b> {data.date}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: 'transparent', borderTop: 'none' }}>
              <div className="text-center">
                <Button variant="info" size="lg">
                  <Link to={`/allExam`} style={{ color: '#fff', textDecoration: 'none' }}>
                    Details
                  </Link>
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      );
    })}
  </div>
</div>


    );
}

export default InstructorBoard;


