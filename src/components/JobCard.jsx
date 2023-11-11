import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import jobData from '../Data/jobs.json';

export const JobCard = () => {
  return jobData.map((job, idx) => (
    <Card sx={{ minWidth: 275 }} key={idx}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.role}
          <div> {job.dates}</div>
        </Typography>

        <Typography variant="body1">
          {job.responsibilities.map((item, idx) => (
            <div key={idx}>- {item}</div>
          ))}
        </Typography>
      </CardContent>
    </Card>
  ));
};
