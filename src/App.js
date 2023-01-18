
import { useCallback, useEffect, useState } from 'react';
import eventBus from './authentication/common/EventBus';
import Home from './authentication/components/Home';
import Login from './authentication/components/Login';
import Register from './authentication/components/Register';
import StudentBoard from './authentication/components/StudentBoard';
import InstructorBoard from './authentication/components/InstructorBoard';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import authService from './authentication/services/AuthenticationService';
import Subject from './INSTRUCTOR/Subject';
import Exam from './INSTRUCTOR/Exam';
import Question from './INSTRUCTOR/Question';
import Details from './INSTRUCTOR/Details';
import StudentList from './INSTRUCTOR/StudentList';
import ViewQuestion from './INSTRUCTOR/ViewQuestion'
import AddFromList from './INSTRUCTOR/AddFromList';
import AddQuestion from './INSTRUCTOR/AddQuestion';
import StudentSubject from './student/StudentSubject';
import StudentExam from './student/StudentExam';
import Test from './student/Test';
import Result from './student/Result';
import Solutions from './student/Solutions';
import StudentResult from './INSTRUCTOR/StudentResult';
import AllExam from './INSTRUCTOR/AllExam';

function App() {
  const [showInstructorBoard ,setShowInstructorBoard] = useState(false);
  const [showStudentBoard,setShowStudentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if(user){
      setCurrentUser(user);
      setShowInstructorBoard(user.roles.includes("INSTRUCTOR"));
      setShowStudentBoard(user.roles.includes("STUDENT"));
    }
    // else{
    //   setShowInstructorBoard(false);
    //   setShowStudentBoard(false);
    // }

    eventBus.on("logout",()=>{
      logOut();
    });
    return () =>{
      eventBus.remove("logout");
    };
  },[]);

  const logOut = () => {
    authService.logout();
    setShowInstructorBoard(false);
    setShowStudentBoard(false);
    setCurrentUser(undefined);
  };

  return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav ml-auto">
               <Link to={"/home"} className="navbar-brand">
                 Online Assessment Platform
               </Link>

              {showInstructorBoard && (
                  <>
                  <li className="nav-item">
                  <Link to={"/subjects"} className="nav-link">
                    subject
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/exam"} className="nav-link">
                   My Exam
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/question"} className="nav-link">
                    Question
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/students"} className="nav-link">
                    Students
                  </Link>
                  </li>

                </>
                )}

                {showStudentBoard && (
                  <>
                  <li className="nav-item">
                  <Link to={"/studentSubject"} className="nav-link">Subject
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link to={`/student/result/${currentUser.username}`} className="nav-link">Result
                    </Link>
                  </li>
                </>
                )}

                {currentUser && (
                  <>
              {/* <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                human
              </Link>
            </li> */}
                </>
                )}
              </div>

          {currentUser ? (
          <div  className='navbar-nav mr-auto'>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
          </div>
          ) : (
         <div className="navbar-nav mr-auto">
              <li className="nav-item">
                
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
           </div>
          )}
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
