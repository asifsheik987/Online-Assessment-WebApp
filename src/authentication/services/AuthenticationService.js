import axios from "axios";

const register = (username, email, password) => {
  return axios.post("http://localhost:8001/api/authenticateUser/signup", 
  {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios.post("http://localhost:8001/api/authenticateUser/signin", 
        {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;