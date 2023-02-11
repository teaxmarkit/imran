import React from 'react';
import {ImageList,ImageListItem,ImageListItemBar,useMediaQuery,useTheme} from '@mui/material';

const IMAGES = [{id:1,img:'NT1.jpg',title:"Image Title"},{id:2,img:'edu1.jpg',title:"Image Title"},{id:3,img:'edu1.jpg',title:"Image Title"},{id:4,img:'edu1.jpg',title:"Image Title"},{id:5,img:'edu1.jpg',title:"Image Title"},
{id:6,img:'edu1.jpg',title:"Image Title"},{id:7,img:'IT5.jpg',title:"Image Title"},{id:8,img:'edu2.jpg',title:"Image Title"},{id:9,img:'edu1.jpg',title:"Image Title"}]

function ImageGallery() {
        
  const mytheme = useTheme();
  const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));
  return (
    <ImageList variant="masonry" cols={lessThanTab?2:3} gap={8}>
    {IMAGES.map((item) => (
        <ImageListItem  className='shadow-lg' key={item.id}>
        <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
        />
        <ImageListItemBar position="below" title={item.title} sx={{marginLeft:'10px'}} />
        </ImageListItem>
    ))}
    </ImageList>
  )
}
export default ImageGallery