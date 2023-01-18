


 import {useState , useEffect} from "react";

 import axios from "axios";
 



  
     function Subject()
     {

    //  ---------------------- add Subject & close buttton working  -------------------------------------
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleAddSubject()
         {
            setDisplay({display:"block"});
         }

         function handleCloseAdd(){
             setDisplay({display:"none"});
         }

     // --------------- Fetching all subjects from db.json file-------------------------

      const [subjects , setSubjects] = useState([]);

         useEffect(()=>{
            
            async function getAllSubject(){
                let value = await axios.get(`http://localhost:8002/subjects/allSubjects`);
                console.log(value);
                setSubjects(value.data);
                  //console.log(value.data[0]);
            }
                getAllSubject();
         },[]);

     // --------------------Adding Subject And re-render subject component-----------------

      const [subject , setSubject] = useState({
          name:"",
      });

     function handleInput(e){
          setSubject({ 
              name: e.target.value
          });
        //   console.log(subject);
     }


       async function handleAddNewSubject(){
            await axios.post(`http://localhost:8002/subjects/addSubject` , subject);
            setStatus(true);
        }

        const [status , setStatus] = useState();

      

    // ------------------------Deleting Subject and reload component------------------------------

       async function deleteSubject(id){
          await axios.delete(`http://localhost:8002/subjects/deleteSubject/${id}`);
          setStatusDelete(true);
       }

       const [statusDelete , setStatusDelete] = useState();
      
       
        if(statusDelete) return <Subject />;

        if(status) return <Subject />;

        // -------------------------------------------------------

        if(subjects.length === 0) return(
                             <>
                                <div>

                                        <div > 
                                              <h2>No Subject Available</h2>     
                                         </div>

                                       <div >
                                           <button onClick={handleAddSubject}>Add Subject</button>
                                       </div>

                                        {/* Add Subject */}


                                        <div >   
                                           <label htmlFor="">Enter Subject </label> 
                                            <input onChange={(e)=>handleInput(e)}  type="text" placeholder="Enter Subject name" /> 

                                          <div >
                                              <button onClick={handleAddNewSubject}  >Add</button>
                                               <button onClick={handleCloseAdd} >Close</button>
                                          </div>
                                   </div>
 
</div>
                             </>
         );
                
         return(
             <>
            
            <div>

                  <div> 
                      <h2>Subject List</h2>     
                 </div>

                 <div >
                     <table >
                         <thead>
                            <tr>
                               <th >Subject Name</th>
                                <th>Options</th>
                            </tr>
                         </thead>
                         <tbody>
                             {
                                 subjects.map((data , i) => {
                                    return(
                                        <tr key={i}>
                                           <td>{data.name}</td>
                 <td><button onClick={ () => deleteSubject(data.id) }>Delete</button></td>
                                       </tr>
                                    );
                                   
                                 })
                             }
                             

                         </tbody>
                     </table>
                  </div>

                  <div >
                       <button onClick={handleAddSubject}>Add Subject</button>
                   </div>

                   {/* Add Subject */}

                
                   <div>   
                       <label htmlFor="">Enter Subject </label> 
                       <input onChange={(e)=>handleInput(e)}  type="text" placeholder="Enter Subject name" /> 

                       <div>
                          <button onClick={handleAddNewSubject}  >Add</button>
                          <button onClick={handleCloseAdd} >Close</button>
                        </div>
                   </div>
                   
            </div>



                 
             </>
         );
     }

     export default Subject;