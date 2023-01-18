import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import {MemberProps} from "./MemberComponent.d";




function MemberComponent () {
  return (
    <Card sx={{ width:'auto',border:'none'}} className='shadow'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="120"
        image="../../src/assets/constellation-bg.svg"
        alt="Image of the member"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chief Executive Officer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <>
            <IconButton></IconButton>
        </>
      </CardContent>
    </CardActionArea>
  </Card>
   
  )
}

export default MemberComponent