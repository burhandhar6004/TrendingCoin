import axios from "axios";

const API = "/api/user/";

const fetchData = async (UserData) => {
  const response = await axios.post(API + "/register", UserData);
  localStorage.setItem("user",JSON.stringify(response.data));
    return response.data
//   console.log(response);
};

const login = async (UserData) => {
  const response = await axios.post(API + "/login", UserData);
  localStorage.setItem("user",JSON.stringify(response.data));
    return response.data
//   console.log(response);
};

const authService = {
  fetchData,
  login,
};

export default authService;
