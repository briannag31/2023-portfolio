import * as React from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';
import Grid from '@mui/material/Grid';
export const Projects = () => {
  return (
    <Grid container spacing={1} justifyContent={'center'} direction={'row'} width={'100%'}>
      <ProjectCard />
    </Grid>
  );
};
