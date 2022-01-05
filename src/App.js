//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'



function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#4C0070';
      document.body.style.color = 'white';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar title = "textUtils2" menuText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
     
      {/*<About/>*/}
      {<TextForm heading="Enter the text to analyse" />}
    </>
  );
}

export default App;
