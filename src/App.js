import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header'
import Image from './Image'
import axios from 'axios'
import styled from 'styled-components'

export default function App() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log('res.data',res.data);
        return setImageData(res.data);
      })
      .catch(err => console.log(err))
    }, [])
    
  // console.log('imageData',imageData);

  return (
    <StyledApp className="App">
      <Header date={imageData.date} />
      <Image url={imageData.url} hdurl={imageData.hdurl} title={imageData.title} explanation={imageData.explanation} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: ${pr => pr.theme.black};
  color: ${pr => pr.theme.white};

  a {
    color: ${pr => pr.theme.primaryColor};
    text-decoration: none;
  }
`