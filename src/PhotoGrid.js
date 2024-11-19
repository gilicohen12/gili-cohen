import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IMG_4946 from './photographs/IMG_4946.jpg';
import IMG_5066 from './photographs/IMG_5066.jpg';
import IMG_5084 from './photographs/IMG_5084.jpg';
import IMG_5118 from './photographs/IMG_5118.jpg';
import IMG_5227 from './photographs/IMG_5227.jpg';
import IMG_5256 from './photographs/IMG_5256.jpg';
import IMG_5583 from './photographs/IMG_5583.jpg';
import IMG_5584 from './photographs/IMG_5584.jpg';
import IMG_5620 from './photographs/IMG_5620.jpg';
import IMG_5633 from './photographs/IMG_5633.jpg';
import IMG_5652 from './photographs/IMG_5652.jpg';
import IMG_6162 from './photographs/IMG_6162.jpg';

const itemData = [
  { img: IMG_4946, title: 'Image 4946' },
  { img: IMG_5066, title: 'Image 5066' },
  { img: IMG_5084, title: 'Image 5084' },
  { img: IMG_5118, title: 'Image 5118' },
  { img: IMG_5227, title: 'Image 5227' },
  { img: IMG_5256, title: 'Image 5256' },
  { img: IMG_5583, title: 'Image 5583' },
  { img: IMG_5584, title: 'Image 5584' },
  { img: IMG_5620, title: 'Image 5620' },
  { img: IMG_5633, title: 'Image 5633' },
  { img: IMG_5652, title: 'Image 5652' },
  { img: IMG_6162, title: 'Image 6162' },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '80%',
  maxWidth: '80%',
  overflow: 'auto',
};

export default function WovenImageList() {
  const [open, setOpen] = React.useState(false);
  const [currentImg, setCurrentImg] = React.useState('');

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div style={{marginTop: 70}}>
      <ImageList sx={{ width: '100%', height: 'auto' }} variant="woven" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleOpen(item.img)}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ cursor: 'pointer' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={currentImg} alt="Large view" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Modal>
    </div>
  );
}
