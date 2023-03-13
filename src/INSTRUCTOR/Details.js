 import {useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
   import { useNavigate, useParams} from "react-router-dom";
import authService from "../authentication/services/AuthenticationService";
import { getExamById } from "../redux/slices/examSlice";

    
    function Details(){
        
        const {id} = useParams();
        const dispatch = useDispatch();
        const {selectedExam} = useSelector(state=>state.exam);

        const [exam  , setExam] = useState({
            examName:"",
            desc:"",
            subject:"",
            date: "",
            user:null
        });

        useEffect(() => {
                dispatch(getExamById(id)).then(response=>{
                  setExam(response.payload);
                })
        },[id])

   // -------------------------Go back function---------------------------------------
     
      let navigate = useNavigate();
      const user = authService.getCurrentUser();
    
      function handleGoBack(){
        if(user.id===exam.user.id){
          navigate("/exam");
        }
        else{
            navigate("/allExam")
        }
      }


        return (
            <>
                <div> 
                     <h2>Exam Details</h2>     
                 </div>

                 <div>
                     <table className="table table-striped-columns">
                         <thead >
                              <tr>
                                <th>Exam Name</th>
                                <td> {exam.examName} </td>
                             </tr>

                              <tr>
                                <th>Exam Description</th>
                                <td> {exam.desc} </td>
                              </tr>

                               <tr>
                                  <th>Exam Creation Date</th>
                                  <td> {exam.date} </td>
                               </tr>
                               <tr>
                                  <th>subject</th>
                                  <td> {exam.subject.name} </td>
                               </tr>
                            </thead>
                         </table>
                     </div>

                    <div>
                       <button className="btn btn-outline-primary" onClick={handleGoBack}>Go Back</button>
                   </div>
            </>
        );
    }

    export default Details;