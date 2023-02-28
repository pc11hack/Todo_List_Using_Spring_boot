import React from "react";
import "./App.css";
import "./Login_form_css.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import IconButton from "@material-ui/core/IconButton";
import { 
  Link
} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Registration_form = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



          // To check if user is already present

  const checkData = async (e) => {
    try {
      let obj = await axios.post("http://localhost:8080/one", {
        name: name,
        username: username,
        password: password,
      });
      console.log(obj);
      return obj.data;
    } catch (e) {
      console.log(e);
    }
    return 0;
  };

  // Adding user data

  const addData = async (e) => {
    e.preventDefault();
    try {
                  // Calling checkData to verify user credentials

      if ((await checkData())) {
        alert(
          "Username or Password is alredy taken. Please enter unique credentials..."
        );
        return;
      } else {
                        // else adding the user
                
        await axios.post("http://localhost:8080/userAdd" ,
        {
            name:name,
            username:username,
            password:password
        })
        toast.success(" Registered Successfully ...", {
          position: toast.POSITION.TOP_CENTER,
        });
                  // Timer to go back to login page
        setTimeout( ()=> {
          navigate('/');
        },3000);
      }
    } catch (e) {
      console.log(e);
    }
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



  return (
    <div className="container_3">
      <div>
                  {/* Form info */}
        <form className="centerInfo" onSubmit={addData}>
                  {/* Header */}
          <h3>User Registration</h3>

          <div className="firstdiv2">
                    {/* Enter name */}
            <PersonPinIcon fontSize="small" />
            <input
              className="input_user_name"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              aria-describedby="emailHelp"
              placeholder=" Enter Name"
            />
          </div>

          <div className="firstdiv2">

                    {/* Enter username */}
            <PersonIcon fontSize="small" />
            <input
              className="input_user_name"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="emailHelp"
              placeholder=" Enter Username"
            />
          </div>

          <div className="seconddiv2">

                      {/* Enter password */}
            <LockIcon fontSize="small" />
            <input
              className="input_user_name"
              type="password"
              id="passw"
              onChange={(e) => setPassword(e.target.value)}
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
                      {/* Sign up button */}
          <button type="submit" className="myButton">
            Sign Up
          </button>
        </form>
              
        <ToastContainer /><>

                        {/* Login link */}
        <span className="loginLink" style={{ color: "green" }}>
          Have an account?{" "}
          <Link className="loginLink2" to="/">
            Login
          </Link>
        </span></>
      </div>
    </div>
  );
};
