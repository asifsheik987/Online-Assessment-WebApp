// import { useState, useEffect } from "react";
// import axios from "axios";

// import { Link, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllSubjects } from "../redux/slices/SubjectSlice";


// function StudentSubject() {

//     //const [allSubject, setAllSubject] = useState([]);
//     const allSubject = useSelector(state=>state.subject.subjectList);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         // async function getAllSubject() {
//         //     let value = await axios.get(`http://localhost:8002/subjects/allSubjects`);
//         //     setAllSubject(value.data);
//         // }
//         // getAllSubject();
//         dispatch(getAllSubjects());
//     }, [])


//     return (
//         <div>
//             <div>
//                 <h1>Choose Subjects</h1>
//             </div>
//             <div className="flex flex-shrink justify-content" style={{"background-color":"transparent"}}>
//                 {
//                     allSubject.map((data, i) => {
//                         return (

//                             <div className="card m-3" key={i} style={{"background-color":"transparent"}}>
//                                 <div className="card-header bg-primary" style={{"background-color":"transparent"}}>
//                                     <span><b>{data.name}</b></span>
//                                 </div>

//                                 <div className="card card-footer" style={{"background-color":"transparent"}} >
//                                     <Link to={`/studentExam/${data.name}`}>
//                                         <button className="btn btn-outline-info">Go to Exam</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// }

// export default StudentSubject;



import { useState, useEffect } from "react";
import axios from "axios";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../redux/slices/SubjectSlice";


function StudentSubject() {

    const allSubject = useSelector(state=>state.subject.subjectList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSubjects());
    }, [])

    return (
        <div>
            <div>
                <h1>Choose Subjects</h1>
                <hr/>
            </div>
            <div className="row">
                {
                    allSubject.map((data, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="card m-3 border border-secondary border-3" style={{"background-color":"transparent"}}>
                                    <div className="card-header bg-primary text-white  text-center" style={{"background-color":"transparent"}}>
                                        <span><b>{data.name}</b></span>
                                    </div>
                                   
                                    <div className="card-footer" style={{"background-color":"transparent"}} >
                                        <div className="text-center">
                                        <Link to={`/studentExam/${data.name}`}>
                                            <button className="btn btn-outline-primary">Go to Exam</button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StudentSubject;
