import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Link } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((state) => state.auths);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <CurrencyBitcoinIcon id="icon" color="warning" />
          <Typography fontSize={20} variant="h6" sx={{ flexGrow: 1 }}>
            <Link id="nav-text" to={"/"}>
              CURRENCIES
            </Link>
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            color={"black"}
            id="text-1"
          >
            <Link to={"/"}>Home</Link>
          </Typography>

          <Typography
            variant="h6"
            color={"black"}
            id="text-2"
            sx={{ flexGrow: 1 }}
          >
            <Link to={"/about"}>About</Link>
          </Typography>

          <Typography
            variant="h6"
            color={"black"}
            id="text-3"
            sx={{ flexGrow: 12 }}
          >
            <Link to={"/contact"}>Contact-us</Link>
          </Typography>

          {!user ? (
            <>
              <Link to={"/register"}>
                <Button>
                  <AppRegistrationIcon />
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button sx={{ margin: "0px 10px" }}>
                  <PersonAddAltIcon />
                </Button>
              </Link>
            </>
          ) : (
            
              <Button color="error" onClick={handleLogout}>
                <Link to={"/login"}><LogoutIcon /></Link>
              </Button>
        
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
