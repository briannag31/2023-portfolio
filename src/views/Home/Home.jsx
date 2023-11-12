import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Home.css';
import Container from '@mui/material/Container';
import headshot from '../../photos/headshot.png';
export const Home = () => {
  return (
    <Container>
      <div className="circular--portrait">
        <img src={headshot} />
      </div>
      <Card className="card">
        <CardContent>hello</CardContent>
      </Card>
    </Container>
  );
};
