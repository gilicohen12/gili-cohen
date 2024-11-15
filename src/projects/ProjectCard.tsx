import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { TextField, DialogActions } from "@mui/material"
import { grey } from '@mui/material/colors';


interface ProjectCardProps {
  projectTitle: string;
  projectSummary: string;
  projectCodeURL: string;
  fullDetails: string;
  technology: string[];
}

export default function ProjectCard({ projectTitle, projectSummary, projectCodeURL, fullDetails, technology }: ProjectCardProps) {
  const [popout, setPopOut] = React.useState(false);
  const handleClickOpen = () => {
    setPopOut(true);
  };

  const handleClose = () => {
    setPopOut(false);
  };

  return (
    <div>
      <Card sx={{ width: 345, height: 420, backgroundColor: 'black', color: 'white', borderRadius: 4 }}>
        <CardMedia
          sx={{ height: 140, borderRadius: '4px 4px 0 0' }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2, gap: '5px', alignItems: "left"}}>
            {technology.map((tech: string, index: number) => (
              <Chip key={index} label={tech.trim()} sx={{ backgroundColor: 'white', color: 'black', marginTop: "10px"}} />
            ))}
          </Stack>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {projectSummary}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', paddingRight: 2, alignItems: 'flex-end' }}>
            <Button 
            size="small" 
            onClick={handleClickOpen} 
            sx={{ 
              '&:hover': {
              backgroundColor: 'darkgrey',
              }
            }}
            >
            Learn More
            </Button>
        </CardActions>
      </Card>

      <Dialog
        open={popout}
        onClose={handleClose}
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle sx={{ fontSize: '1.5rem', color: 'black' }}>{projectTitle}</DialogTitle>
        <DialogContent>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2, gap: '10px' }}>
            {technology.map((tech: string, index: number) => (
              <Chip key={index} label={tech.trim()} sx={{ backgroundColor: 'black', color: 'white' }} />
            ))}
            </Stack>
          <DialogContentText>
            {fullDetails}
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
            {projectCodeURL &&
            <Button 
              onClick={() => window.open(projectCodeURL, '_blank')} 
              color="info" 
              autoFocus 
              sx={{ 
              backgroundColor: grey[900], 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'lightgrey',
              }
              }}
            > 
              View Code 
            </Button>}
          <Button onClick={handleClose} color="info" autoFocus> Close </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}