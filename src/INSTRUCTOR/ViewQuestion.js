
      import React, {useState , useEffect} from "react";

      import { useParams , useNavigate } from "react-router-dom";

      import axios from "axios";
import authService from "../authentication/services/AuthenticationService";

     function ViewQuestion(){

//  ---------------------- add Subject & close buttton working  -------------------------------------
       
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleEditQuestion(questionId)
         {
            setDisplay({display:"block"});
             setDataInInputField(questionId);
         }

         function handleClose(){
             setDisplay({display:"none"});
         }

         const {id,insId} = useParams();
         console.log(parseInt(insId));

//  ---------------------- Fetching All Questions -------------------------------------
    
      const [questions , setQuestions] = useState([]);

      useEffect(() => {
          async function getAllQuestions(){
            let value = await axios.get(`http://localhost:8002/questions/getQuestionsForExam/${id}`);
            setQuestions(value.data);
            //console.log(value.data);
          } 
          getAllQuestions();
      },[id])


//  ---------------------- handling text field -------------------------------------

  const [updatedQ , setUpdatedQ] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    exam: id,
    subject:"",
    examLevel:""
  });


   function onTextFieldChange(e){
        setUpdatedQ({
            ...updatedQ,
            [e.target.name] : e.target.value
        })
       // console.log(updatedQ);
   }





//  ---------------------- Showing data in text field -------------------------------------

 // Id of current question clicked
      const [qId , setQId] = useState();

     
              function setDataInInputField(questionId){
                  setQId(questionId);

                 for(let i=0; i<questions.length ; i++)
                 {
                     if( parseInt( questions[i].id) === parseInt( questionId )) {
                         setUpdatedQ(questions[i]);
                     }
                 }
             }
// -----------------------------------------------------------------------------------------
    
    const [check , setCheck] = useState();
    

     async function updateQuestion(){
          await axios.put(`http://localhost:8002/questions/question/${qId}` , updatedQ);
          setCheck(true);
     }

// ----------------------------------------------------------------------------------------

    let navigate = useNavigate();
    const user = authService.getCurrentUser();
    console.log(typeof(user.id))
     function handleGoBack(){
        if(user.id === parseInt(insId)){
            navigate("/exam");
          }
          else{
              navigate("/allExam");
          }
     }
 // ----------------------------------------------------------------------------------------
 
    const [d , setD] = useState();

     async function deleteQuestion(question){
        if(question.exam.length<=1){
            await axios.delete(`http://localhost:8002/questions/deleteQuestion/${question.id}`);
            setD(true);
        }
        else{
         await axios.put(`http://localhost:8002/questions/deleteQuestionFromExam/${id}/${question.id}`);
         setD(true);
        }
     }
  

       if(check) return <ViewQuestion />;

       if(d) return <ViewQuestion />;

      

         return (
             <>
                <div> 
                            <h2>Question List</h2>     
                         </div>

                     <div>
                         <table className="table table-hover">
                            <thead >
                               <tr>
                                  <th>Question Name</th>
                                  <th>Option one</th>
                                  <th>Option two</th>
                                  <th>Option three</th>
                                  <th>Option four</th>
                                  <th>Question Answer</th>
                                  <th>Exam Level</th>
                                  <th>Options</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    questions.map((data , i) => {
                                            return(
                                                <tr key={i}>
                                                  <td>{data.qname}</td>
                                                  <td>{data.optionOne}</td>
                                                  <td>{data.optionTwo}</td>
                                                  <td>{data.optionThree}</td>
                                                  <td>{data.optionFour}</td>
                                                  <td>{data.answer}</td>
                                                  <td>{data.examLevel}</td>
                                                  <td>
                                                    <button className="btn btn-outline-primary m-1" onClick={()=>handleEditQuestion(data.id)}>Edit</button>
                                                    <button className="btn btn-outline-danger m-1" onClick={()=>deleteQuestion(data)}>Delete</button>
                                                  </td>
                                              </tr>
                                            );
                                    })
                                }
                               
                            </tbody>
                         </table>
                     </div>

                    <div>
                       <button className="btn btn-outline-primary m-1" onClick={handleGoBack}>Go Back</button>
                   </div>

                   
                   <div className="card" style={display}> 
                       <h4>Edit Question</h4>  

                        <label>Enter Question </label>
                       <input className="form-control" value={updatedQ.qname} 
                       onChange={(e) => onTextFieldChange(e)}
                       name="qname"
                       type="text" placeholder="Enter Question " /> 

                        <label >Enter Option A </label>
                       <input className="form-control" value={updatedQ.optionOne}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="optionOne"
                       type="text" placeholder="Enter Option A" /> 

                        <label >Enter Option B </label>
                        <input className="form-control" value={updatedQ.optionTwo} 
                        onChange={(e) => onTextFieldChange(e)}
                        name="optionTwo"
                        type="text" placeholder="Enter Option B" /> 

                        <label >Enter Option C </label>
                       <input className="form-control" value={updatedQ.optionThree}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="optionThree"
                        type="text" placeholder="Enter Option C" /> 

                        <label >Enter Option D </label>
                       <input className="form-control" value={updatedQ.optionFour}  
                       onChange={(e) => onTextFieldChange(e)} 
                       name="optionFour"
                       type="text" placeholder="Enter Option D" /> 

                        <label >Enter Question Answer </label>
                       <input className="form-control" value={updatedQ.answer}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="answer"
                       type="text" placeholder="Enter Answer" />  

                        <label >Enter Subject </label>
                       <input className="form-control" value={updatedQ.subject.name} 
                       onChange={(e) => onTextFieldChange(e)} 
                       name="subject"
                       type="text" placeholder="Enter Subject" disabled/>

                       <label >Enter Level </label>
                       <input className="form-control" value={updatedQ.examLevel} 
                       onChange={(e) => onTextFieldChange(e)} 
                       name="examLevel"
                       type="text" placeholder="Enter ExamLevel" />  

                       <div>
                         <button className="btn btn-outline-success m-1" onClick={updateQuestion} >Update Question</button>
                         <button className="btn btn-outline-primary m-1" onClick={handleClose} >Close</button>
                       </div>
                   </div>
             </>
         );
     }

     export default ViewQuestion;