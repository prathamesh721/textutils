//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#4C0070';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title = "textUtils2" menuText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
     <Alert alert={alert}/>
      {/*<About/>*/}
      {<TextForm heading="Enter the text to analyse" showAlert={showAlert}/>}
    </>
  );
}

export default App;
