import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import './Home.css';
// import Container from '@mui/material/Container';
import headshot from '../../photos/headshot.png';
export const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="home-text">
          Hello, <br /> I&#x27;m Brianna!
        </h1>
        <div className="circular--portrait">
          <img src={headshot} />
        </div>
      </div>
      <div className="buttons">
        <button className="button">About Me</button>
        <button className="button">Resume</button>
        <button className="button">My Projects</button>
        <button className="button">Contact</button>
      </div>
    </>
  );
};
