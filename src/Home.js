import React, { useEffect, useState } from "react";
import "./Home_css.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Login_form } from "./Login_form";
import axios from "axios";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from "@material-ui/core/IconButton";

export const Home = (props) => {

  const location = useLocation();
    
  console.log("location id : " + location.state.user_id);
  const[user_id , setUserId] = useState(location.state.user_id);
  const [name , setName] = useState(location.state.name);
  const [username , setUsername] = useState(location.state.username);
  const [password , setPassword] = useState(location.state.password);
  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");
  const [myData , setmyData] = useState([]);
  const [ct , setCt] = useState(0);
  const navigate = useNavigate();

  const mySetData= async() =>{
        let lst = (await axios.post("http://localhost:8080/getalltodos" , 
        {
                name:name,
                username:username,
                password:password
        }));
        setmyData(lst.data);
  }

  useEffect( ()=> {
    mySetData();
  },[ct]);



   const formSubmit = async (e) =>{
        e.preventDefault();
        // alert("in Submit form");
        // console.log("The title : " + title + " desc : "+ desc + "id : " + user_id);
        setTitle("");
        setDesc("");
        $(function () {
            $('#exampleModalCenter .close').click();
         });

         try{
            let newData = await axios.post("http://localhost:8080/todoAdd" , {
                title : title,
                desc : desc,
                userId : user_id
            })

            setmyData([...myData , newData]);
            setCt(ct+1);
         }
         catch(e){
            console.log(e);
         }
   }


   const deleteTodo = async(id) => {
    if(window.confirm("Are you sure? ")){
        
        try{
            await axios.delete(`http://localhost:8080/todoDelete/${id}`)
        }
        catch(e){
            console.log(e);
        }
        setCt(ct+1);
    }
   }

   const LogoutIcon = () => {
    if(window.confirm("Are you sure want to logout? ")){
       navigate("/");
  }
   }


   const IconFocus = () => {
      document.getElementById("logoutroundicon").style.color = '#43878a';
      document.getElementById("iconbuttonbox").style.borderColor = 'red';
   }

   const IconFocusOut = () =>{
      document.getElementById("logoutroundicon").style.color = 'red';
      document.getElementById("iconbuttonbox").style.borderColor = '#43878a';
   }

    

  return (
    <>

                {/* Logout  */}
            <div><h4 className="logoutText" style={{position: 'relative' , left:'57px' , top:'20px'}}>Logout</h4></div>
            <div><IconButton
              id = "iconbuttonbox"
              style={{
                zIndex: '1',
    borderRadius: "5px",
    position: 'relative',
    left: '145px',
    top: '-32px',
    background: 'transparent',
    border: 'solid',
    color: '#43878a',
    height: '40px',
    width: '40px',
    outline:'none'
              }}
              onClick = {LogoutIcon}
              onMouseOver = {IconFocus}
              onMouseOut = {IconFocusOut}
            ></IconButton>
            <LogoutRoundedIcon id='logoutroundicon' className="logoutButton" fontSize="large" />


            </div>

        {/* Todo Container */}

        {console.log(myData)}
      <div id="div1" className="container_2">
        {/* Todo Header */}
        <div className="headerInfo2">
          <div className="todoHeader">
            <h2>Todo List</h2>
          </div>
          {/* Todo Add icon */}
          <div className="todoAddIcon">
            <button
              style={{ background: "black", border: "none", outline: "none" }}
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <AddBoxRoundedIcon className="todoAddButton" fontSize="large" />
            </button>
          </div>
        </div>

        {/* Todo Items */}
        <div>

        { myData.length === 0? <h4 className="NoDatamessage">"No data to display"</h4> : myData.map(info => {
            return(
                    <div className="todoCard" key={info.todo_id+ct}>
          {/* Todo Items info */}
          <div className="todoInfo">
            <h3>Title<span style={{'marginLeft':"128px"}}>:</span> <span style={{'fontSize':"22px" , "marginLeft":"58px"}}>{info.title}</span> </h3>
            <div className="discriptionflex">
            <span><h3>Desciption</h3></span><span><h3>:</h3></span> <span className="infodesc">{info.desc}</span>
            </div>
            
          </div>

          {/* Delete Icon */}
          <div className="todoDeleteIcon" style={{'position':"relative" , 'left':"300px"}}>
            <button className="todoDeleteButton" style={{ background: "black", border: "none", outline: "none" }}
              type="button"
              data-toggle="modal"
              onClick={()=>{deleteTodo(info.todo_id)}}
              >
            <DeleteRoundedIcon />
            </button>
          </div>
        </div>
            )
        }) }

        

        </div>

        
      </div>


            {/* Model */}

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                What to do!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body */}
                {/* Form info */}
            <form onSubmit={formSubmit}>
            <div className="modal-body">
                <div className="firstbox2">
                  <TitleRoundedIcon fontSize="small" />
                  <input
                    className="input_user_name2"
                    type="text"
                    id="titleinfo"
                    aria-describedby="emailHelp"
                    placeholder=" Enter Title"
                    onChange={ (e)=> { setTitle(e.target.value) } }
                  />
                </div>

                <div className="secondbox2">
                  <DescriptionRoundedIcon fontSize="small" />
                  <textarea
                    className="input_user_name3"
                    type="text"
                    id="descinfo"
                    placeholder=" Enter Description"
                    onChange={ (e)=> { setDesc(e.target.value) } }
                  />
                </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" id="formsubmitbutton" className="btn btn-primary">
                Submit
              </button>
            </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};