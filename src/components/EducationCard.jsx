import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import educationData from '../Data/education.json';

export const EducationCard = () => {
  return educationData.map((school, idx) => (
    <Card sx={{ minWidth: 275 }} key={idx}>
      <CardContent>
        <Typography variant="h5" component="div">
          {school.school}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {school.degree}
          <div> {school.dates}</div>
        </Typography>

        <Typography variant="body1">{school.locationOrNotes}</Typography>
      </CardContent>
    </Card>
  ));
};
