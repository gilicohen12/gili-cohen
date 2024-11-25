import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ProjectCard({ projectTitle, projectSummary, projectCodeURL, fullDetails, technology, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div key="front">
        <Card sx={{ width: 345, height: 420, backgroundColor: 'black', color: 'white', borderRadius: 4}}>
          <div>
            <CardMedia
              sx={{ height: 140, borderRadius: '4px 4px 0 0' }}
              component="img"
              alt={projectTitle}
              height="300"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {projectTitle}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2, gap: '5px', alignItems: "left" }}>
                {technology.map((tech, index) => (
                  <Chip key={index} label={tech.trim()} sx={{ backgroundColor: 'white', color: 'black', marginTop: "10px" }} />
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {projectSummary}
              </Typography>
            </CardContent>
          </div>
          <CardActions sx={{ justifyContent: 'flex-end', paddingRight: 2, alignItems: 'flex-end' }}>
            <Button onClick={handleFlip} sx={{ color: 'white' }}>Learn More</Button>
          </CardActions>
        </Card>
      </div>

      <div key="back">
        <Card sx={{ width: 345, height: 420, backgroundColor: 'black', color: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ flexGrow: 1, marginTop: 3}}>
            <Typography gutterBottom variant="h5" component="div">
              {projectTitle}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2, gap: '5px', alignItems: "left" }}>
                {technology.map((tech, index) => (
                  <Chip key={index} label={tech.trim()} sx={{ backgroundColor: 'white', color: 'black', marginTop: "10px" }} />
                ))}
              </Stack>
            <Typography variant="body2" sx={{ color: 'white' }}>
              {fullDetails}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end', paddingRight: 2, alignItems: 'flex-end' }}>
            <Button onClick={handleFlip} color="info" autoFocus sx={{ color: 'white' }}>Back</Button>
            {projectCodeURL &&
              <Button 
                onClick={() => window.open(projectCodeURL, '_blank')} 
                color="info" autoFocus sx={{ backgroundColor: grey[800], color: 'white', '&:hover': { backgroundColor: 'lightgrey' } }}>View Code</Button>}
          </CardActions>
        </Card>
      </div>
    </ReactCardFlip>
  );
}