import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import projects from '../Data/projects.json';
import { Link } from 'react-router-dom';

export const ProjectCard = () => {
  return projects.map((project, idx) => (
    <Card sx={{ maxWidth: 345 }} key={idx}>
      <CardMedia
        component="img"
        alt={`image of ${project.name}`}
        height="140"
        image={project.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={project.git}>
          <Button size="small">GitHub Repository</Button>
        </Link>
        <Link to={project.live}>
          <Button size="small">Live Site</Button>
        </Link>
      </CardActions>
    </Card>
  ));
};
