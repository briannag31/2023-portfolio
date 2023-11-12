import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
import { ProjectCard } from '../components/ProjectCard.jsx';
import Grid from '@mui/material/Grid';
export const Projects = () => {
  return (
    // <React.Fragment>
    //   <CssBaseline />
    // <Container>
    <Grid container spacing={1} justifyContent={'center'} direction={'row'} width={'100%'}>
      <ProjectCard />
    </Grid>
    // </Container>
    // </React.Fragment>
  );
};
