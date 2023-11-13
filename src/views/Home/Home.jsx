import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import './Home.css';
import headshot from '../../photos/headshot.png';
export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="top">
          <h1 className="home-text">
            Hello, <br /> I&#x27;m Brianna!
          </h1>
          <div className="circular--portrait">
            <img src={headshot} />
          </div>
        </div>
        <Stack spacing={2} direction="row" justifyContent="space-evenly" mt={20}>
          <button className="button" href="/about">
            <a href="/about"> About Me</a>
          </button>
          <button className="button">
            <a href="/resume">Resume</a>
          </button>
          <button className="button" href="/projects">
            <a href="/projects"> My Projects</a>
          </button>
          <button className="button" href="/contact">
            <a href="/contact">Contact</a>
          </button>
        </Stack>
      </div>
    </>
  );
};
