import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { JobCard } from '../components/JobCard';
import { EducationCard } from '../components/EducationCard';

export const Resume = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h2>Education</h2>
        <EducationCard />
        <h2>Experience</h2>
        <JobCard />
      </Container>
    </React.Fragment>
  );
};
