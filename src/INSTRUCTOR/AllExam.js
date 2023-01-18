 
   import { useState ,useEffect} from "react";
   import axios from "axios";

   import {Link, NavLink} from "react-router-dom";
   import authService from "../authentication/services/AuthenticationService";


    function AllExam(){

//  ---------------------- add Exam & close buttton working  -------------------------------------

// --------------- Fetching all Exam from db.json file-------------------------

      const [exams , setExams] = useState([]);
      const user = authService.getCurrentUser();

      useEffect(()=>{
         
         async function getAllExam(){
             let value = await axios.get(`http://localhost:8002/exam/allExams`);
             setExams(value.data);
             //console.log(value.data[0].name);
         }
             getAllExam();
      },[]);


// --------------------Adding Exam And re-render Exam component-----------------

   


    // ----------------------------Deleting Exam-----------------------------------------------

       const [questions , setQuestions] = useState([]);

       useEffect(() => {
           async function getAllQuestions(){
               let value = await axios.get(`http://localhost:8002/questions/allQuestions`);
               setQuestions(value.data);
            }
            getAllQuestions();
       },[])


        return (
            <>
               <div> 
                    <h2>Exam List</h2>     
               </div>

                <div >
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th>Exam Name</th>
                                <th>Exam Desc.</th>
                                <th>Exam Creation Date</th>
                                <th>Subject</th>
                                <th>Options</th>
                            </tr>
                          </thead>
                          <tbody>
                              {
                                  exams.map((data ,i) => {
                                      return(
                                        <tr key={i}>
                                           <td>{data.examName}</td>
                                           <td>{data.desc}</td>
                                           <td>{data.date}</td>
                                           <td>{data.subject.name}</td>
                                           <td>
                                               <Link to={`/examDetails/${data.id}`}>
                                                 <button className="btn btn-outline-primary m-1">Details</button>  
                                               </Link> 

                                              <NavLink to={`/viewQuestion/${data.id}/${data.user.id}`}>
                                                 <button className="btn btn-outline-primary m-1">View Questions</button>  
                                               </NavLink>
                                          </td>
                                        </tr>
                                      );
                                  })
                              }
                              
                          </tbody>
                     </table>
                 </div>

                 
            </>
        );
    }

    export default AllExam;