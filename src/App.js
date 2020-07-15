import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'

function App() {
  const [nasaData, setNasaData] = useState("")

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((resp) => {
        console.log(resp)
        setNasaData(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      <Title nasaData = {nasaData} />
      <Image nasaData = {nasaData} />
      <Description nasaData = {nasaData} />
    </div>
  );
}

export default App;
