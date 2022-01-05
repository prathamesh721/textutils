//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title = "textUtils2" menuText = "About Us"/>
      <TextForm heading="Enter the text to analyse" />
    </>
  );
}

export default App;
