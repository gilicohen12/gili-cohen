import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, DialogActions } from "@mui/material"

interface ProjectCardProps {
  projectTitle: string;
  projectSummary: string;
  projectCodeURL: string;
}

export default function ProjectCard({ projectTitle, projectSummary, projectCodeURL }: ProjectCardProps) {
  const [popout, setPopOut] = React.useState(false);
  const handleClickOpen = () => {
    setPopOut(true);
  };

  const handleClose = () => {
    setPopOut(false);
  };
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {projectSummary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Learn More</Button>
        </CardActions>
      </Card>

      <Dialog
        open={popout}
        onClose={handleClose}
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle>{projectTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {projectCodeURL &&
            <Button onClick={() => window.open(projectCodeURL, '_blank')} color="primary" autoFocus> View Code </Button>}
          <Button onClick={handleClose} color="primary" autoFocus> Close </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

{/* <video className="border border-black" autoPlay muted loop playsInline poster="./webdevthumb.png" data-astro-transition-persist="astro-vhgsmhyf-1"> <source src="./webdevelopment.mp4" type="video/mp4"/> </video> */ }