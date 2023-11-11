import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ProjectCard } from '../components/ProjectCard.jsx';

export const Projects = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ProjectCard />
      </Container>
    </React.Fragment>
  );
};
