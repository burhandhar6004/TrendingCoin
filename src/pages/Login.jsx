import { Button, LinearProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user , isLoading , isError} = useSelector((state) => state.auths);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if(isLoading){
    return <LinearProgress/>
  }

  return (
    <>
      <div id="div">
        <form id="login" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            fullWidth
            sx={{ margin: "10px 0px 0px 0px" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            fullWidth
            sx={{ margin: " 20px 0px" }}
          ></TextField>

          <Button
            id="btn-login"
            type="submit"
            variant="contained"
            sx={{ margin: "10px 0px" }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
