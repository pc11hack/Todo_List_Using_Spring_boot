import React from 'react'
import './App.css';
import './Login_form_css.css';
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { Block } from '@mui/icons-material';

export const Todo_form = () => {

  const formDisplay = () => {
    document.getElementById("body1").style.backdropFilter = "blur(5px)";
    document.getElementById("form1").style.display = "block";
  }

  const mypriyFun = (e) =>{
    e.preventDefault();
    document.getElementById("form1").style.display = "none";
  }


  return (
    <>
    <div id= "form1"  className='container_4'>

        <div className='centerInfo2'>
        <form onSubmit={mypriyFun}>
                <h3 className='colorChange'>What to do!</h3>

                <div className='firstdiv2'>
                    <TitleRoundedIcon fontSize='small'/>
                    <input className='input_user_name' type="text" id="name" aria-describedby="emailHelp" placeholder=" Enter Title"/>
                </div>

                <div className='seconddiv2'>
                    <DescriptionRoundedIcon fontSize='small'/>
                    <input  className='input_user_name' type="text" id="passw" placeholder=" Enter Description"/>
                </div>

                <button type='submit' className='myButton' >Submit</button>
        </form>
        </div>
    </div>

      <div>
          <button className='myClickButton' onClick={formDisplay}>Click me</button>
      </div>



      


      </>
  );
}
