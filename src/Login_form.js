import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";
import "./Login_form_css.css";
import {
  Link
} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Login_form = () => {

          // Parameters
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const dataSet = async (e) => {
    setData({
      name: "",
      username: username,
      password: password,
    });
  };


            // To check if user credentials are correct

  const checkLogin = async (ec) => {
    ec.preventDefault();
    let valid;
    try {

      valid = await axios.post("http://localhost:8080/one", data);
      if(valid.data){
        navigate('/home',{state:valid.data})
      }
      else{
        alert("Username or Password is wrong. Enter your credentials again")
      }

    } catch (e) {
      console.log(e);
    }
    console.log(valid.data)
  };


            // To make password visible

  function myFunction(e) {
    let x = document.getElementById("passw");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("fullEye").style.display = "none";
      document.getElementById("halfEye").style.display = "block";
    } else {
      x.type = "password";
      document.getElementById("halfEye").style.display = "none";
      document.getElementById("fullEye").style.display = "block";
    }
  }


        // To navigate to registration form
        
      const gotoRegister = () => {
        navigate('/reg_form');
      }

  return (
    <>
    <div className="container_1">
      <div className="split left">
        <img className="imgclass" src={require("./img-01.webp")} />
      </div>

      <div className="split right">
        <form className="centerInfo" onSubmit={checkLogin}>
                {/* Header */}
          <h3>User Login</h3>

                    {/* Enter Username */}
          <div className="firstdiv">
            <PersonIcon fontSize="small" />
            <input
              className="input_user_name"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="uname"
              aria-describedby="emailHelp"
              placeholder=" Enter Username"
            />
          </div>

                      {/* Enter Password */}
          <div className="seconddiv">
            <LockIcon fontSize="small" />
            <input
              className="input_user_name"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="passw"
              placeholder=" Enter Password"
            />
                  {/* for eye icon transition*/}
            <IconButton
              style={{
                zIndex: 1,
                borderRadius: "30px",
                position: "relative",
                left: "-21px",
                background: "transperant",
                outline: "none",
              }}
              onClick={myFunction}
              className="visibilityFunction"
            ></IconButton>
            <VisibilityRoundedIcon id="fullEye" className="visibilityEye" />
            <VisibilityOffRoundedIcon
              style={{ display: "none" }}
              className="visibilityEye2"
              id="halfEye"
            />
          </div>

              {/* Login button */}

          <button type="submit" onClick={dataSet} className="myButton">
            Login
          </button>
        </form>

                    {/* Registration Link */}
        <span className="registerLink" style={{ color: "green" }}>
          Don't have an account?
          <Link  to="/reg_form" state={{data : data}} className="registerLink2">
            Register
          </Link>
        </span>
      </div>
    </div>
    </>
  );
};
