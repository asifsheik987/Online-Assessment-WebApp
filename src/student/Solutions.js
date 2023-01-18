import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Solutions(props) {

    const {examId,examName} = useParams();
    const user = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const [allQuestions , setAllQuestions] = useState([]);



    useEffect(() => {
        async function getAllQuestions(){
            let value = await axios.get(`http://localhost:8002/questions/getQuestionsForExam/${examId}`);
            setAllQuestions(value.data);
            //console.log(value.data);
        }
        getAllQuestions();
    },[examId]);

    const handleGoBack = (e)=>{
        e.preventDefault();
        navigate(`/student/result/${user.username}`);
    }
    return (
        <>
        <div>
            <h3>Solutions for {examName}</h3>
        </div>
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Subject</th>
                        <th>Option1</th>
                        <th>Option2</th>
                        <th>Option3</th>
                        <th>Option4</th>
                        <th>Answer</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allQuestions.map((data , index) => {
                            return(
                                <tr key={index}>
                                    <td>{data.qname}</td>
                                    <td>{data.subject.name}</td>
                                    <td>{data.optionOne}</td>
                                    <td>{data.optionTwo}</td>
                                    <td>{data.optionThree}</td>
                                    <td>{data.optionFour}</td>
                                    <td><b>{data.answer}</b></td>
                                    <td>{data.examLevel}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </table>
            <button className='btn btn-outline-danger' onClick={e=>handleGoBack(e)}>Go Back</button>
        </div>
        </>
    );
}

export default Solutions;