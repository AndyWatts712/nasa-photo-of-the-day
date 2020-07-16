import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, MARS_URL, API_KEY } from './constants'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import styled from 'styled-components'

const MainDiv = styled.div`
  width: 67%;
  border: 2px solid black;
  background-color: yellow;
  margin: auto;
`;

function App() {
  const [nasaData, setNasaData] = useState("")
  const [toggle, setToggle] = useState(false)
  const [marsPhotoData, setMarsPhotoData] = useState("")



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

  useEffect(() => {
    axios.get(`${MARS_URL}&api_key=${API_KEY}`)
      .then((resp) => {
        console.log(resp.data)
        setMarsPhotoData(resp.data)
      })
      .catch((err) => {
        console.log(err)

      })
  }, [])

  return (
    <MainDiv className="App">
      <Title nasaData = {nasaData} />
      {toggle && <Image nasaData = {nasaData.url} marsPhotoData ={marsPhotoData.photos[1].img_src} />}
      <button onClick = {() => setToggle(!toggle)}>{toggle ? "Hide Photo" : "Click for Photo"}</button>
      <button>Mars Rover Photo</button>
      {/* <img src ={marsPhotoData.photos[1].img_src} alt = "Mars"/> */}
      <Description nasaData = {nasaData.explanation} />
    </MainDiv>
  );
}

export default App;
