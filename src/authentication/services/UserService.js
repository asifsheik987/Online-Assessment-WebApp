import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const getPublicContent = () =>{
    return axios.get("http://localhost:8001/api/testUser/all",
    {
        headers: (
            (user && user.accessToken)?{Authorization: "Bearer " + user.accessToken}:{}
        )
    });
};

const getStudentBoard =()=>{
    return axios.get("http://localhost:8001/api/testUser/student",
    {
        headers: (
            (user && user.accessToken)?{Authorization: "Bearer " + user.accessToken}:{}
        )
    });
}

const getInstructorBoard = ()=>{
    return axios.get("http://loclhost:8001/api/testUser/instructor",
    {
        headers: (
            (user && user.accessToken)?{Authorization: "Bearer " + user.accessToken}:{}
        )
    });
}

const userService = {
    getPublicContent,
    getInstructorBoard,
    getStudentBoard,
  };

  export default userService;
