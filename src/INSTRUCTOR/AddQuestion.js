
import { useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import authService from "../authentication/services/AuthenticationService";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select"
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function AddQuestion() {

  const { examId, subjectName } = useParams();
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const form = useRef();
  const checkBtn = useRef();

  const [question, setQuestion] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    examLevel: "",
    examId: examId,
    subjectName: subjectName
  });

  function onInputChange(e) {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    });

    // console.log(question);
  }


  function handleGoBack() {
    navigate("/exam");
  }


  async function addnewQuestion(e) {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      await axios.post("http://localhost:8002/questions/addQuestion", question);
      navigate(`/viewQuestion/${examId}/${user.id}`);
    }
  }



  return (
    <>
      <div>
        <h2>Adding Question</h2>
      </div>

      <Form className="card" ref={form}>
        <label ><b>Question Name</b> </label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="qname"
          type="text" placeholder="Enter Question" validations={[required]} />

        <label ><b>Enter Option A </b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="optionOne"
          type="text" placeholder="Enter Option A" validations={[required]} />

        <label ><b>Enter Option B</b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="optionTwo"
          type="text" placeholder="Enter Option B" validations={[required]} />

        <label ><b>Enter Option C</b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="optionThree"
          type="text" placeholder="Enter Option C" validations={[required]} />

        <label ><b>Enter Option D</b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="optionFour"
          type="text" placeholder="Enter Option D" validations={[required]} />

        <label ><b>Enter Question Answer</b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="answer"
          type="text" placeholder="Enter Question answer (don't write option A,B,C,D)" validations={[required]} />

        <label ><b>Level</b></label>
        <Select className="form-control" onChange={(e) => onInputChange(e)}
          name="examLevel"
          type="text" placeholder="Enter Level" validations={[required]} >
          <option selected>Select Level</option>
          <option value="BASIC">Basic</option>
          <option value="MEDIUM">Medium</option>
          <option value="ADVANCED">Advanced</option>
        </Select>


        <label ><b>Enter Subject</b></label>
        <Input className="form-control" onChange={(e) => onInputChange(e)}
          name="subjectName" id="subjectField"
          type="text" placeholder="Enter Subject" value={subjectName} disabled validations={[required]} />

        <div>
          <button className="btn btn-outline-success m-2" onClick={e => addnewQuestion(e)} >Add</button>
          <button className="btn btn-outline-danger m-2" onClick={handleGoBack}>Go back</button>
        </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </>
  );
}

export default AddQuestion;