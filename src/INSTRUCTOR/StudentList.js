

   import {useState , useEffect} from "react";
   import axios from "axios";
import { useNavigate } from "react-router-dom";

     function StudentList(){

       const [students , setStudents] = useState([]);

       const navigate = useNavigate();

       useEffect(()=> {
         async function getAllStudent(){
           let value = await axios.get(`http://localhost:8001/api/testUser/allStudents`);
           setStudents(value.data);
         }
         getAllStudent();
       },[])
       const handleResult=(e,username)=>{
        e.preventDefault();
        navigate(`/student/viewResult/${username}`)

       }

         return (
             <>
               <div > 
                   <h2>Student List</h2>     
                </div>

                <div >
                   <table className="table table-hover">
                      <thead>
                         <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Options</th>
                         </tr>
                       </thead>
                       <tbody>
                         {
                           students.map((data , i) => {
                             return(
                              <tr key={i}>
                                 <td>{data.username}</td> 
                                 <td>{data.email}</td> 
                                 <td>
                                   {/* <NavLink exact to={`/AdminDashboard/StudentList/Details/${data.email}`}>
                                     <button>View Result</button> 
                                   </NavLink> */}
                                   <button className="btn btn-outline-primary" onClick={e=>handleResult(e,data.username)}>View result</button>
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

     export default StudentList;