import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import educationData from '../Data/education.json';
import Grid from '@mui/material/Grid';

export const EducationCard = () => {
  return educationData.map((school, idx) => (
    <Grid key={idx} margin={2}>
      <Card sx={{ width: 350, height: 150, backgroundColor: '#0077B6' }} key={idx}>
        <CardContent>
          <Typography variant="h5" component="div" color={'white'}>
            {school.school}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="white">
            {school.degree}
          </Typography>

          <Typography variant="body1" color={'white'}>
            {school.locationOrNotes}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};
