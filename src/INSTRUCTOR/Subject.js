import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useState, useEffect, useRef } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSubject, deleteSubject, getAllSubjects } from "../redux/slices/SubjectSlice";
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
function Subject() {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleAddSubject() {
        setDisplay({ display: "block" });
    }

    function handleCloseAdd() {
        setDisplay({ display: "none" });
    }

    const {subjectList: subjects,isLoading} = useSelector(state => state.subject);

    useEffect(() => {
        dispatch(getAllSubjects());

    }, []);


    const [subject, setSubject] = useState({
        name: "",
    });

    function handleInput(e) {
        setSubject({
            name: e.target.value.toUpperCase()
        });
    }


    async function handleAddNewSubject(e) {
        e.preventDefault();
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(addSubject(subject));
            setStatus(true);
        }
    }

    const [status, setStatus] = useState();

    function removeSubject(id) {
        dispatch(deleteSubject(id));
        setStatus(true);
    }


    const [statusDelete, setStatusDelete] = useState();

    if (status) return <Subject />;

    // -------------------------------------------------------

    if (subjects.length === 0) return (
        <>
            <div>

                <div >
                    <h2>No Subject Available</h2>
                </div>

                <div >
                    <button className="btn btn-outline-primary m-2" onClick={handleAddSubject}>Add Subject</button>
                </div>

                {/* Add Subject */}


                <div style={display} >
                    <label htmlFor="">Enter Subject </label>
                    <input className="form-input" onChange={(e) => handleInput(e)} type="text" placeholder="Enter Subject name" />

                    <div >
                        <button className="btn btn-outline-primary m-2" onClick={handleAddNewSubject}  >Add</button>
                        <button className="btn btn-outline-primary m-2" onClick={handleCloseAdd} >Close</button>
                    </div>
                </div>

            </div>
        </>
    );

    return (
        <>

            <div>

                <div>
                    <h2>Subject List</h2>
                </div>

                <div >
                    <table className="table table bordered">
                        <thead>
                            <tr>
                                <th >Subject Name</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjects.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.name}</td>
                                            <td><button className="btn btn-outline-danger" onClick={() => removeSubject(data.id)}>Delete</button></td>
                                        </tr>
                                    );

                                })
                            }


                        </tbody>
                    </table>
                </div>

                <div >
                    <button className="btn btn-outline-success" onClick={handleAddSubject}>Add Subject</button>
                </div>

                {/* Add Subject */}


                <Form style={display} ref={form}>
                    <label htmlFor="">Enter Subject </label>
                    <Input className="form-control" style={{ "background-color": "transparent" }} onChange={(e) => handleInput(e)} type="text" placeholder="Enter Subject name" validations={[required]} />

                    <div>
                        <button className="btn btn-outline-primary m-2" onClick={handleAddNewSubject}  >Add</button>
                        <button className="btn btn-outline-primary m-2" onClick={handleCloseAdd} >Close</button>
                    </div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>

            </div>




        </>
    );
}

export default Subject; 