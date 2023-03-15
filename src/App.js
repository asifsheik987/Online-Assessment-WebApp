
import { useCallback, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Home from './authentication/components/Home';
import Login from './authentication/components/Login';
import Register from './authentication/components/Register';
import StudentBoard from './authentication/components/StudentBoard';
import InstructorBoard from './authentication/components/InstructorBoard';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Subject from './instructor/subject/Subject';
import Exam from './instructor/exam/Exam';
import Question from './instructor/question/Question';
import Details from './instructor/exam/Details';
import StudentList from './instructor/result/StudentList';
import ViewQuestion from './instructor/question/ViewQuestion'
import AddFromList from './instructor/question/AddFromList';
import AddQuestion from './instructor/question/AddQuestion';
import StudentSubject from './student/StudentSubject';
import StudentExam from './student/StudentExam';
import Test from './student/Test';
import Result from './student/Result';
import Solutions from './student/Solutions';
import StudentResult from './instructor/result/StudentResult';
import AllExam from './instructor/exam/AllExam';
import { logout } from './redux/slices/AuthSlice';


function App() {
  const [showInstructorBoard ,setShowInstructorBoard] = useState(false);
  const [showStudentBoard,setShowStudentBoard] = useState(false);
  const {user: currentUser} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentUser){
      setShowInstructorBoard(currentUser.roles.includes("INSTRUCTOR"));
      setShowStudentBoard(currentUser.roles.includes("STUDENT"));
    }
  },[currentUser]);

  const logOut = useCallback(() => {
    dispatch(logout())
    setShowInstructorBoard(false);
    setShowStudentBoard(false);
  },[]);

  return (
   
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          Online Assessment Platform
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {showInstructorBoard && (
              <>
                <li className="nav-item">
                  <Link to="/subjects" className="nav-link">
                    Subjects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/exam" className="nav-link">
                    My-Exams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/question" className="nav-link">
                    Questions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/students" className="nav-link">
                    Students
                  </Link>
                </li>
              </>
            )}

            {showStudentBoard && (
              <>
                <li className="nav-item">
                  <Link to="/studentSubject" className="nav-link">
                    Subjects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/student/result/${currentUser.username}`}
                    className="nav-link"
                  >
                    Results
                  </Link>
                </li>
              </>
            )}
          </ul>


          {currentUser ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <a href="/login" className="nav-link mx-2" onClick={logOut}>
                  Log-Out
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link mx-2">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link mx-2">
                  Sign-Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
        <Route path="/" element={<Home />} />
                   <Route path="/home" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/student" element={<StudentBoard />} />
             <Route path="/subjects" element={<Subject />} />
             <Route path="/exam" element={<Exam />}/>
             <Route path="/question" element={<Question />}/>
             <Route path="/instructor" element={<InstructorBoard />} />
             <Route path="/examDetails/:id" element={<Details />}/>
             <Route path="/students" element={<StudentList />}/>
             <Route path="/viewQuestion/:id/:insId" element={<ViewQuestion/> }/>
             <Route path="/addQuestionFromBank/:examId/:subjectName" element={<AddFromList />}/>
             <Route path="/addNewQuestion/:examId/:subjectName" element={<AddQuestion />}/>
             <Route path="/studentSubject" element={<StudentSubject />}/>
             <Route path="/studentExam/:name" element={<StudentExam />} />
             <Route path="/test/:subjectName/:examId/:subjectId" element={<Test />}/>
             <Route path="/student/result/:username" element={<Result />}/>
             <Route path="/student/viewResult/:username" element={<StudentResult />}/>
             <Route path="/examSolutions/:examId/:examName" element={<Solutions />}/>
             <Route path="/allExam" element={<AllExam />}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;
