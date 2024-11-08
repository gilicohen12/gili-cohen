import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"

interface ProjectCardProps {
  projectTitle: string;
  projectSummary: string;
}

export default function ProjectCard({ projectTitle, projectSummary }: ProjectCardProps) {
  const [popout, setPopOut] = React.useState(false);
  return (
    <div>
      <Card sx={{ width: 345}}>
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
          <Button size="small" onChange={e => setPopOut(true)}>Learn More</Button>
        </CardActions>
      </Card>

      <Dialog
        open={popout}
        onClose={e => setPopOut(false)}
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle>Add New Account File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in account code and upload new file to view it's data
          </DialogContentText>

          <TextField size="small" label="Enter Account Code" sx={{ marginTop: '10px' }} fullWidth />
          <div>

          </div>
          <div className="center-div" style={{ marginTop: '10px' }}>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}