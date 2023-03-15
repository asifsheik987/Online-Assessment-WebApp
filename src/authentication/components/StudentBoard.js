// import axios from "axios";
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';
// import { getAllExams } from "../../redux/slices/examSlice";
// import { getStudentResult } from "../../redux/slices/ResultSlice";
// import authService from "../services/AuthenticationService";

// function StudentBoard(props) {

//   const allExam = useSelector(state=>state.exam.examList);

//   const result = useSelector(state=>state.result.resultList);
//   const dispatch = useDispatch();

//   const user = useSelector(state=>state.auth.user);

//   useEffect(() => {
//     // async function getAllExams() {
//     //   const value = await axios.get(`http://localhost:8002/exam/allExams`);

//     //   setAllExam(value.data);
//     // }
//     // getAllExams();
//     dispatch(getAllExams());
//   }, []);

//   useEffect(() => {
//     // async function getUserResults() {
//     //   const value = await axios.get(`http://localhost:8002/result/resultForStudent/${user.username}`);
//     //   setResult(value.data);
//     // }
//     // getUserResults();
//     dispatch(getStudentResult(user.username));
//   }, [])
//   const navigate = useNavigate();

//   return (
//     <>
//       <div>
//         <h1>All Available exams</h1>
//       </div>
//       {
//         allExam.map((data, i) => {
//           let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
//           console.log(val);
//           if (!val) {
//             return (
//               <div className="card m-2" key={i} style={{"background-color":"transparent"}}>
//                 <div className="card card-header align-items-center" style={{"background-color":"transparent"}}> <span><h3>{data.examName}</h3></span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam ID : </b>{data.id}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Subject : </b>{data.subject.name}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam Description : </b>{data.desc}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}><span><b>Date : </b>{data.date}</span> </div>

//                 <div className="card card-footer align-items-center" style={{"background-color":"transparent"}}>
//                   <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
//                     <button className="btn btn-info">Attempt</button>
//                   </Link>
//                 </div>
//               </div>
//             );
//           }
//           else {
//             return (
//               <div className="card m-2" key={i} style={{"background-color":"transparent"}}>
//                 <div className="card card-header align-items-center" style={{"background-color":"transparent"}}> <span><h3>{data.examName}</h3></span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam ID : </b>{data.id}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Subject : </b>{data.subject.name}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}> <span><b>Exam Description : </b>{data.desc}</span> </div>
//                 <div className=" ms-2" style={{"background-color":"transparent"}}><span><b>Date : </b>{data.date}</span> </div>

//                 <div className="card card-footer align-items-center" style={{"background-color":"transparent"}}>
//                   {/* <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}> */}
//                   <button className="btn btn-secondary" disabled>Already Attempted</button>
//                   {/* </Link> */}
//                 </div>
//               </div>
//             );
//           }

//         })
//       }
//       {/* <button className="btn btn-outline-primary" onClick={goBack}>Go Back</button> */}
//     </>
//   );
// }

// export default StudentBoard;
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from 'react-router-dom';
// import { getAllExams } from "../../redux/slices/examSlice";
// import { getStudentResult } from "../../redux/slices/ResultSlice";

// function StudentBoard(props) {
//   const allExam = useSelector(state => state.exam.examList);
//   const result = useSelector(state => state.result.resultList);
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth.user);

//   useEffect(() => {
//     dispatch(getAllExams());
//   }, []);

//   useEffect(() => {
//     dispatch(getStudentResult(user.username));
//   }, [])

//   const navigate = useNavigate();

//   return (
//     <>
//       <div>
//         <h1>All Available exams</h1>
//       </div>
//       <hr/>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {allExam.map((data, i) => {
//           let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
//           console.log(val);
//           return (
//             <div className="col" key={i}>
//               <div className="card" style={{ "background-color": "transparent" }}>
//                 <div className="card-header"><h3>{data.examName}</h3></div>
//                 <div className="card-body">
//                   <p className="card-text">
//                     <b>Exam ID : </b>{data.id}<br />
//                     <b>Subject : </b>{data.subject.name}<br />
//                     <b>Exam Description : </b>{data.desc}<br />
//                     <b>Date : </b>{data.date}
//                   </p>
//                 </div>
//                 <div className="card-footer align-items-center">
//                   <div className="text-center">
//                   {val ? (
//                     <button className="btn btn-secondary" disabled>Already Attempted</button>
//                   ) : (
//                     <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
//                       <button className="btn btn-info">Attempt</button>
//                     </Link>
//                   )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default StudentBoard;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getAllExams } from "../../redux/slices/examSlice";
import { getStudentResult } from "../../redux/slices/ResultSlice";

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
      {/* <div className="container my-4">
        <h1 className="text-center mb-4">All Available Exams</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {allExam.map((data, i) => {
            let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
          if(val){  return (
              <div className="col" key={i}>
                <div className="card border border-3 border-secondary h-100">
                  <div className="card-header bg-secondary text-white"><h3>{data.examName}</h3></div>
                  <div className="card-body">
                    <p className="card-text">
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
                      }else{
                        return (
                          <div className="col" key={i}>
                            <div className="card border border-3 border-primary h-100">
                              <div className="card-header bg-primary text-white"><h3>{data.examName}</h3></div>
                              <div className="card-body">
                                <p className="card-text">
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
          })}
        </div>
      </div> */}

<div className="container my-4">
  <h1 className="text-center mb-4">All Available Exams</h1>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {allExam.map((data, i) => {
      let val = result.some(res => { return ((res.exam.id === data.id) && (res.user.username === user.username)) });
      if (val) {
        return (
          <div className="col" key={i}>
            <div className="card h-100 border border-3 border-secondary bg-transparent">
              <div className="card-header bg-secondary text-white"><h3 className="text-center">{data.examName}</h3></div>
              <div className="card-body">
                <div className="ms-2 flex-grow-1">
                  <span><b>Subject : </b>{data.subject.name}</span>
                </div>
                <div className="ms-2 flex-grow-1">
                  <span><b>Exam Description : </b>{data.desc}</span>
                </div>
                <div className="ms-2 flex-grow-1">
                  <span><b>Date : </b>{data.date}</span>
                </div>
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
            <div className="card h-100 border border-3 border-primary bg-transparent">
              <div className="card-header bg-primary text-white"><h3 className="text-center">{data.examName}</h3></div>
              <div className="card-body">
                <div className="ms-2 flex-grow-1">
                  <span><b>Subject : </b>{data.subject.name}</span>
                </div>
                <div className="ms-2 flex-grow-1">
                  <span><b>Exam Description : </b>{data.desc}</span>
                </div>
                <div className="ms-2 flex-grow-1">
                  <span><b>Date : </b>{data.date}</span>
                </div>
              </div>
              <div className="card-footer bg-transparent">
                <div className="text-center">
                  <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
                    <button className="btn btn-outline-primary">Attempt</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    })}
  </div>
</div>

    </>
  );
}

export default StudentBoard;
