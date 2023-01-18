import axios from "axios";
//import { get } from "immer/dist/internal";
import React, { useState, useEffect } from 'react';
import { useParams ,NavLink, Link, useNavigate } from 'react-router-dom';
import authService from "../services/AuthenticationService";

function StudentBoard(props) {

    //const {name} = useParams();

    const [allExam, setAllExam] = useState([]);

    const[result,setResult] = useState([]);

    const user = authService.getCurrentUser();

    useEffect(() => {
        async function getAllExams() {
            const value = await axios.get(`http://localhost:8002/exam/allExams`);
            
            setAllExam(value.data);
        }
        getAllExams();
    }, []);

    useEffect(()=>{
      async function getUserResults(){
        const value = await axios.get(`http://localhost:8002/result/resultForStudent/${user.username}`);
        setResult(value.data);
      }
      getUserResults();
    },[])
    const navigate = useNavigate();
    // const goBack=()=>{
    //     navigate("/studentSubject");
    // }

    return (
        <>
            <div>
                <h1>All Available exams</h1>
            </div>
            {
                allExam.map((data, i) => {
                  let val = result.some(res=>{ return((res.exam.id===data.id)&&(res.user.username===user.username))});
                  console.log(val);
                 if(!val){
                    return (
                        <div className="card m-2" key={i}>
                            <div className="card card-header align-items-center"> <span><h3>{data.examName}</h3></span> </div>
                            <div className=" ms-2"> <span><b>Exam ID : </b>{data.id}</span> </div>
                            <div className=" ms-2"> <span><b>Subject : </b>{data.subject.name}</span> </div>
                            <div className=" ms-2"> <span><b>Exam Description : </b>{data.desc}</span> </div>
                            <div className=" ms-2"><span><b>Date : </b>{data.date}</span> </div>
            
                            <div className="card card-footer align-items-center">
                              <Link to={`/test/${data.examName}/${data.id}/${data.subject.id}`}>
                                 <button className="btn btn-info">Attempt</button>
                               </Link>
                            </div>
                        </div>
                    );
                  }
                  else{
                    return (
                      <div className="card m-2" key={i}>
                          <div className="card card-header align-items-center"> <span><h3>{data.examName}</h3></span> </div>
                          <div> <span><b>Exam ID : </b>{data.id}</span> </div>
                          <div> <span><b>Subject : </b>{data.subject.name}</span> </div>
                          <div> <span><b>Exam Description : </b>{data.desc}</span> </div>
                          <div><span><b>Date : </b>{data.date}</span> </div>
          
                          <div className="card card-footer align-items-center">
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

// import React, { useEffect, useState } from 'react';
// import eventBus from '../common/EventBus';
// import userService from "../services/UserService"
// function StudentBoard(props) {
//     const [content,setContent] = useState("");

//     useEffect(()=>{
//         userService.getStudentBoard().then(
//             (response) =>{
//                 setContent(response.data);
//             },
//             (error) => {
//                 const _content =
//                   (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                   error.message ||
//                   error.toString();
        
//                 setContent(_content);
        
//                 if (error.response && error.response.status === 401) {
//                   eventBus.dispatch("logout");
//                 }
//               }
//         );
//     },[]);
//     return (
//         <div className='container'>
//             <header className='jumbotron'>
//                 <h3>{content}</h3>
//             </header>
            
//         </div>
//     );
// }

// export default StudentBoard;