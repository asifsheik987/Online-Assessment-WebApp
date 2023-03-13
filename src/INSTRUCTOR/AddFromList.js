import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addQToExam, getQuestionsBySubject } from '../redux/slices/QuestionSlice';

function AddFromList(props) {
    const { examId, subjectName } = useParams();
    const questions = useSelector(state => state.question.selectedQ);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuestionsBySubject(subjectName));
    }, [])

    const availableQuestns = questions.filter((q) => {
        const arr = []
        arr.push(q.exam.some(e => e.id == examId));
        return (arr.includes(false))
    });
    let navigate = useNavigate();

    const [check, setCheck] = useState(false);

    function handleGoBack() {
        navigate("/exam");
    }

    const handleAdd = (e, questionId) => {
        e.preventDefault()
        dispatch(addQToExam({ examId, questionId }));
        setCheck(true);

    }

    const handleNewQuestion = () => {
        navigate(`/addNewQuestion/${examId}/${subjectName}`)
    }

    if (check) return <AddFromList />;
    return (
        <div className='container'>
            <div>
                <button className='btn btn-outline-primary' onClick={handleNewQuestion}>Add New Question</button>
            </div>
            <table className='table table-hover table-striped'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Question Name</th>
                        <th>ExamLevel</th>
                        <th>Option one</th>
                        <th>Option two</th>
                        <th>Option three</th>
                        <th>Option Four</th>
                        <th>Question Answer</th>
                        <th>Subject Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        availableQuestns.map((data, i) => {

                            return (
                                <tr key={i}>
                                    <td>{data.qname}</td>
                                    <td>{data.examLevel}</td>
                                    <td>{data.optionOne}</td>
                                    <td>{data.optionTwo}</td>
                                    <td>{data.optionThree}</td>
                                    <td>{data.optionFour}</td>
                                    <td>{data.answer}</td>
                                    <td>{data.subject.name}</td>
                                    <td>
                                        <button className='btn btn-outline-success' onClick={(e) => handleAdd(e, data.id)}>Add to Exam</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </table>
            <div>
                <button className="btn btn-outline-primary m-1" onClick={handleGoBack}>Go Back</button>
            </div>

        </div>
    );
}

export default AddFromList;