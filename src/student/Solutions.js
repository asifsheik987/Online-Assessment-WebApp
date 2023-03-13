import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsForExam } from '../redux/slices/QuestionSlice';

function Solutions(props) {

    const { examId, examName } = useParams();
    const user = useSelector(state=>state.auth.user);
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const allQuestions = useSelector(state=>state.question.selectedQ);


    useEffect(() => {
        dispatch(getQuestionsForExam(examId))
    }, [examId]);

    const handleGoBack = (e) => {
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
                            allQuestions.map((data, index) => {
                                return (
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
                <button className='btn btn-outline-danger' onClick={e => handleGoBack(e)}>Go Back</button>
            </div>
        </>
    );
}

export default Solutions;