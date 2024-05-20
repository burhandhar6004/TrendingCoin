import { Margin } from "@mui/icons-material";
import { Button, LinearProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RegisUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const { isLoading, isSuccess, isError, user, message } = useSelector(
    (state) => state.auths
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password2 !== password) {
      // alert("password is incoreect")
      toast.error("password is incorrect");
    }

    dispatch(RegisUser(formData));
    setFormData("")
    
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if(isError || message){
      toast.error(message)
    }
  }, [user,isError, message]);



  if(isLoading){
    return(
      <LinearProgress/>
    )
  }

  return (
    <>
      <Typography
        id="regis"
        sx={{ padding: "80px 0px 30px 0px" }}
        fontSize={"30px"}
        textAlign={"center"}
      >
        User Registration Form
      </Typography>

      <div id="div">
        <form id="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Name"
            onChange={handleChange}
            value={name}
            name="name"
            required
            fullWidth
            sx={{ margin: "10px 0px 0px 0px" }}
          />
          <TextField
            variant="outlined"
            label="email"
            onChange={handleChange}
            value={email}
            name="email"
            required
            fullWidth
            sx={{ margin: "10px 0px 0px 0px" }}
          />
          <TextField
            variant="outlined"
            label="Password"
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            required
            fullWidth
            sx={{ margin: " 20px 0px" }}
          />
          <TextField
            variant="outlined"
            label="Confirm-Password"
            type="password"
            onChange={handleChange}
            value={password2}
            name="password2"
            required
            fullWidth
          />
          <Button
            id="btn-regis"
            type="submit"
            variant="contained"
            sx={{ margin: "10px 0px" }}
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default UserRegister;
