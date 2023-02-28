import logo from './logo.svg';
import './App.css';
import { Login_form } from './Login_form';
import { Home } from './Home';
import { Registration_form } from './Registration_form';
import { Todo_form } from './Todo_form';
import { Try_java } from './Try_java';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (

    <>
    <Router>
    <Routes>
          <Route exact path="/" element={<Login_form/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/todo_form" element={<Todo_form/>}/>
          <Route exact path="/reg_form" element={<Registration_form/>}/>
    </Routes>
    </Router>


    </>


    // <Login_form/>
    //<Home/>
    //  <Todo_form/>
    //<Try_java/>
    //  <Registration_form/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
