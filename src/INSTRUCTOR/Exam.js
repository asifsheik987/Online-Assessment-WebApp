
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select"

import { Link, NavLink } from "react-router-dom";
import authService from "../authentication/services/AuthenticationService";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../redux/slices/SubjectSlice";
import { addExam, getExamsForUser } from "../redux/slices/examSlice";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function Exam() {

    const [display, setDisplay] = useState({
        display: "none"
    });

    const form = useRef();
    const checkBtn = useRef();


    const {subjectList: subjects} = useSelector((state)=>state.subject)
    //console.log(subjects);


    function handleAddExam() {
        setDisplay({ display: "block" });
    }

    function handleCloseExam() {
        setDisplay({ display: "none" });
    }
    const exams = useSelector(state=>state.exam.examList);
    const {user} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getAllSubjects());

    }, []);
     

    useEffect(() => {
            dispatch(getExamsForUser(user.id))
    }, []);


    var date = new Date();
    var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    const [exam, setExam] = useState({
        examName: "",
        desc: "",
        subjectName: "",
        date: d + " " + t,
        userId: user.id
    });

    function handleInput(e) {
        setExam({
            ...exam,
            [e.target.name]: e.target.value
        });
    }

    async function handleAddNewExam(e) {
        e.preventDefault();

        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(addExam(exam));
            setStatus(true);
        }
    }

    const [status, setStatus] = useState();

    const [statusDeleteExam, setStatusDeleteExam] = useState();


    async function deleteExam(id) {
        await axios.delete(`http://localhost:8002/questions/removeQFromExam/${id}`).then(res1=>{
            axios.delete(`http://localhost:8002/result/deleteResultByExam/${id}`)}).then(res2=>{  
                axios.delete(`http://localhost:8002/exam/deleteExam/${id}`);})
        setStatusDeleteExam(true);
    }

    if (status) return <Exam />

    if (statusDeleteExam) return <Exam />

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <h2 className="text-center my-4">Exam List</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th>Exam Name</th>
                                <th>Exam Desc.</th>
                                <th>Exam Creation Date</th>
                                <th>Subject</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exams.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.examName}</td>
                                        <td>{data.desc}</td>
                                        <td>{data.date}</td>
                                        <td>{data.subject.name}</td>
                                        <td>
                                            <Link to={`/examDetails/${data.id}`}>
                                                <button className="btn btn-sm btn-outline-primary mx-1">Details</button>
                                            </Link>

                                            <NavLink to={`/viewQuestion/${data.id}/${data.user.id}`}>
                                                <button className="btn btn-sm btn-outline-primary mx-1">View Questions</button>
                                            </NavLink>

                                            <NavLink to={`/addQuestionFromBank/${data.id}/${data.subject.name}`}>
                                                <button className="btn btn-sm btn-outline-primary mx-1">Add Question</button>
                                            </NavLink>

                                            <button className="btn btn-sm btn-outline-danger mx-1" onClick={() => deleteExam(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

            <div>
                <button className="btn btn-outline-primary m-2" onClick={handleAddExam}>Add Exam</button>
            </div>
            <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto" style={display}>
        <div class="card border-0 shadow rounded-3 my-5" style={{"background-color":"transparent"}}>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5"><b>Create Exam</b></h5>
            <Form  ref={form}>
                <label htmlFor=""><b>Enter Exam name</b> </label>
                <Input className="form-control" style={{"background-color":"transparent"}} onChange={(e) => handleInput(e)} name="examName" type="text"
                    placeholder="Enter Exam name" validations={[required]} />


                <label htmlFor=""><b>Enter Subject Name </b></label>
                <Select className="form-control" style={{"background-color":"transparent"}} id="nameFiled" onChange={(e) => handleInput(e)} name="subjectName" type="text"
                    placeholder="Enter Subject Name" validations={[required]}>
                    <option selected>Select Subject</option>
                    {subjects.map((subject, id) => (<option key={id} value={subject.name}>{subject.name}</option>))}
                </Select>

                <label htmlFor=""><b>Enter Exam Description</b> </label>
                <Input className="form-control" style={{"background-color":"transparent"}} onChange={(e) => handleInput(e)} name="desc" type="text"
                    placeholder="Enter Exam des" validations={[required]} />

                <div>
                    <button className="btn btn-outline-success m-2" onClick={e => handleAddNewExam(e)} >Add</button>
                    <button className="btn btn-outline-success m-2" onClick={handleCloseExam}  >Close</button>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            </div></div></div></div>
        </div>
    );
}

export default Exam;