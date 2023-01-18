import axios from "axios";
import {useEffect , useState} from "react";
function Question(){

    const [questions , setQuestions] = useState([]);

     useEffect(() => {

        async function getAllQuestions(){
           const value = await axios.get(`http://localhost:8002/questions/allQuestions`);
            setQuestions(value.data);
        }
        getAllQuestions();
     } ,[])



      return (
          <>
              <div> 
                  <h2>Question List</h2>     
               </div>

               <div>
                  <table className="table table-success table-striped-columns table-hover">
                     <thead>
                       <tr>
                           <th>Question Name</th>
                           <th>ExamLevel</th>
                           <th>Option one</th>
                           <th>Option two</th>
                           <th>Option three</th>
                           <th>Option Four</th>
                           <th>Question Answer</th>
                            <th>Subject Name</th>
                        </tr>
                     </thead>
                     <tbody>
                         {
                             questions.map((data,i) => {
                                console.log(data);
                                return(
                                    <tr key={i}>
                                        <td>{data.qname}</td>
                                        <td>{data.examLevel}</td>
                                        <td>{data.optionOne}</td>
                                        <td>{data.optionTwo}</td>
                                        <td>{data.optionThree}</td>
                                        <td>{data.optionFour}</td>
                                        <td>{data.answer}</td>
                                        <td>{data.subject.name}</td>
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

  export default Question ;