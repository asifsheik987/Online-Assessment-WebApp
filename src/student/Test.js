import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useNavigate, useParams } from "react-router-dom";
import { getQuestionsForExam } from '../redux/slices/QuestionSlice';
import { addResult } from '../redux/slices/ResultSlice';

function Test() {

    // ---------------------------------------------------------
    let { subjectName, examId, subjectId } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const allQuestions = useSelector(state => state.question.selectedQ);

    useEffect(() => {
        dispatch(getQuestionsForExam(examId));
    }, [examId]);

    // ---------------------------------------------------------

    const [answer, setAnswer] = useState([])
    let responses = [];


    let correctAnswer = [];

    function onRadioButtonChange(e, index) {
        let val = e.target.value;
        responses = answer;
        responses[index] = val;
        setAnswer([...responses]);

    }

    let count = 0;
    async function submitTest() {
        for (let i = 0; i < allQuestions.length; i++) {
            correctAnswer.push(allQuestions[i].answer);
        }


        let score = 0;
        let total = 0;
        let status = "";
        for (let i = 0; i < count; i++) {
            if (answer[i] === correctAnswer[i]) {
                console.log(true)
                if (allQuestions[i].examLevel.toUpperCase() === "BASIC") {
                    score = score + 1
                    total = total + 1
                }
                if (allQuestions[i].examLevel.toUpperCase() === "MEDIUM") {
                    score = score + 2
                    total = total + 2
                }
                if (allQuestions[i].examLevel.toUpperCase() === "ADVANCED") {
                    score = score + 3
                    total = total + 3
                }
            }
            else {
                if (allQuestions[i].examLevel.toUpperCase() === "BASIC") {
                    total = total + 1
                }
                if (allQuestions[i].examLevel.toUpperCase() === "MEDIUM") {
                    total = total + 2
                }
                if (allQuestions[i].examLevel.toUpperCase() === "ADVANCED") {
                    total = total + 3
                }
            }
        }
        console.log(score);
        console.log(total);

        if (score >= (0.65 * total)) status = "Pass";
        else status = "Fail";
        console.log(status);




        var date = new Date();
        var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


        let data = {
            "status": status,
            "score": score,
            "user": user,
            "edate": d + " " + t,
            "subject": { "id": subjectId },
            "totalMarks": total,
            "exam": { "id": examId },
            "totalQuestion": count
        };

        dispatch(addResult(data));
        navigate(`/student/result/${user.username}`);
    }


    return (
        <>
            <div>
                <h1>Answer all the questions</h1>
            </div>
            {console.log(useParams())}
            {

                allQuestions.map((data, index) => {
                    count++;
                    return (
                        <div className='card m-2' key={index} style={{ "background-color": "transparent" }}>
                            <div className='card card-header' style={{ "background-color": "transparent" }}> <span>{count}. {data.qname}</span> </div>
                            <div className='form-check ' style={{ "background-color": "transparent" }}>
                                <input className='form-check-input' onChange={(e) => onRadioButtonChange(e, index)} value={data.optionOne}
                                    name={index} type="radio" />
                                <label className='form-check-label' htmlFor="option1">{data.optionOne}</label>
                            </div>

                            <div className='form-check' style={{ "background-color": "transparent" }}>
                                <input className='form-check-input' onChange={(e) => onRadioButtonChange(e, index)} value={data.optionTwo}
                                    name={index} type="radio" />
                                <label className='form-check-label' htmlFor="option2"> {data.optionTwo}</label>
                            </div>

                            <div className='form-check' style={{ "background-color": "transparent" }}>
                                <input className='form-check-input' onChange={(e) => onRadioButtonChange(e, index)} value={data.optionThree}
                                    name={index} type="radio" />
                                <label className='form-check-label' htmlFor="option3">{data.optionThree}</label>
                            </div>

                            <div className='form-check' style={{ "background-color": "transparent" }}>
                                <input className='form-check-input' onChange={(e) => onRadioButtonChange(e, index)} value={data.optionFour}
                                    name={index} type="radio" />
                                <label className='form-check-label' htmlFor="option4">{data.optionFour}</label>
                            </div>
                        </div>
                    );

                })
            }
            <div><button className='btn btn-primary' onClick={submitTest}>Submit Exam</button></div>
        </>
    );
}

export default Test