import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IMG_4946 from './photographs/IMG_4946.jpg'
import IMG_5066 from './photographs/IMG_5066.jpg'
import IMG_5084 from './photographs/IMG_5084.jpg'
import IMG_5118 from './photographs/IMG_5118.jpg'
import IMG_5227 from './photographs/IMG_5227.jpg'
import IMG_5256 from './photographs/IMG_5256.jpg'
import IMG_5583 from './photographs/IMG_5583.jpg'
import IMG_5584 from './photographs/IMG_5584.jpg'
import IMG_5620 from './photographs/IMG_5620.jpg'
import IMG_5633 from './photographs/IMG_5633.jpg'
import IMG_5652 from './photographs/IMG_5652.jpg'
import IMG_6162 from './photographs/IMG_6162.jpg'


export default function WovenImageList() {
  return (
    <ImageList sx={{ width: 1340, height: 400 }} variant="woven" cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: IMG_4946,
    title: 'Bed',
  },
  {
    img: IMG_5066,
    title: 'Kitchen',
  },
  {
    img: IMG_5084,
    title: 'Sink',
  },
  {
    img: IMG_5118,
    title: 'Books',
  },
  {
    img: IMG_5633,
    title: 'Coffee table',
  },
  
  {
    img: IMG_5256,
    title: 'Laptop',
  },
  {
    img: IMG_5620,
    title: 'Storage',
  },
  {
    img: IMG_5583,
    title: 'Doors',
  },
  {
    img: IMG_5584,
    title: 'Coffee',
  },
  {
    img: IMG_5227,
    title: 'Candle',
  },
  
  {
    img: IMG_6162,
    title: 'Blinds',
  },
  {
    img: IMG_5652,
    title: 'Blinds',
  }
];










