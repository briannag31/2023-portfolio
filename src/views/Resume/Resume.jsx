import * as React from 'react';
import Container from '@mui/material/Container';
import { JobCard } from '../../components/JobCard';
import { EducationCard } from '../../components/EducationCard';
import Grid from '@mui/material/Grid';
import './Resume.css';
export const Resume = () => {
  return (
    <Container style={{ justifyContent: 'center' }}>
      <h2 className="title">Education</h2>
      <Grid container direction={'row'}>
        <EducationCard />
      </Grid>
      <h2 className="title">Experience</h2>
      <Grid container direction={'row'}>
        <JobCard />
      </Grid>
    </Container>
  );
};
