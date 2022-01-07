import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';

function App() {
  //Color-Mode State
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#080221";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f0fff9";
      document.body.style.color = "black";
    }
  }

  //Alert -State
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={Mode} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To analyze" mode={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
