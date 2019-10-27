import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY");
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {

    async function demo(){
     console.log("Working...")
    }

    demo();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
