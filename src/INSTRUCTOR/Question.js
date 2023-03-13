import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../redux/slices/QuestionSlice";
function Question() {

    const { questionList, isLoading } = useSelector((state) => state.question);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllQuestions());

    }, [])
    if (isLoading) {
        return (
            <div>Loading....</div>
        )
    }

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
                            questionList.map((data, i) => {
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

export default Question;