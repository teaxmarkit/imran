import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import {FacebookOutlined,Twitter,Instagram,LinkedIn,GitHub} from "@mui/icons-material"




function MemberComponent () {
  return (
    <div style={{ width:'auto',border:'none'}} className='shadow-md'>
   
      <CardMedia
        component="img"
        height="90"
        image="../../src/assets/constellation-bg.svg"
        alt="Image of the member"
      />
      <CardContent>
        <Typography className='font-inter font-bold' gutterBottom variant="h5" component="div">
          Chief Executive Officer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <div className='flex flex-row justify-center items-center py-3'>
          <IconButton aria-label="delete">
            <FacebookOutlined  />
          </IconButton>
          <IconButton aria-label="delete">
            <Twitter />
          </IconButton>
          <IconButton aria-label="delete">
            <Instagram />
          </IconButton>
          <IconButton size='medium' aria-label="delete">
            <GitHub />
          </IconButton>
          <IconButton aria-label="delete">
            <LinkedIn />
          </IconButton>
        </div>
      </CardContent>

  </div>
   
  )
}

export default MemberComponent