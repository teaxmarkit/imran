import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {IconButton } from '@mui/material';
import {FacebookOutlined,Twitter,Instagram,LinkedIn,GitHub} from "@mui/icons-material";
import MemberProps from './MemberComponent.d';
import AOS from 'aos';
import "aos/dist/aos.css";


function MemberComponent ({position,content,media,imageUrl}:MemberProps) {

  React.useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div data-aos='zoom-in' className='shadow-md rounded-md dark:shadow-lg'>
   
      <CardMedia
        component="img"
        height="50"
        image={imageUrl}
        // image="../../src/assets/constellation-bg.svg"
        alt="Image of the member"
      />
      <CardContent>
      <div className='flex flex-row justify-center items-center pb-3'>
          {
            media.facebook && 
            <IconButton aria-label="delete">
            <FacebookOutlined  />
          </IconButton>
          }
          {
            media.twitter && 
            <IconButton aria-label="delete">
              <Twitter />
            </IconButton>
          }
          {
            media.instagram && 
            <IconButton aria-label="delete">
              <Instagram />
            </IconButton>
          }
          {
            media.github && 
            <IconButton size='medium' aria-label="delete">
              <GitHub />
            </IconButton>
          }

          {
            media.linkedin && 
            <IconButton aria-label="delete">
              <LinkedIn />
            </IconButton>
          }
         
        </div>
        <Typography className='font-inter font-bold text-center' gutterBottom variant="h5" component="div">
          {position}
        </Typography>
        
        <p className='font-poppinsLight text-center text-sm md:text-2md'>
            {content}
        </p>
     
      </CardContent>

  </div>
   
  )
}


function MembersComponent() {
  const MEMBERS:MemberProps[] = [
    {id:1,imageUrl:'/constellation-bg.svg',position:"Chief Executive Officer",content:"Co-founder and CEO of SchoolAll",media:{facebook:"F",twitter:"T",instagram:"I",linkedin:"",github:""}},
    {id:2,imageUrl:'/constellation-bg.svg',position:"Chief Technical Officer",content:"Co-founder and CTO of SchoolAll",media:{facebook:"F",twitter:"",instagram:"I",linkedin:"L",github:"G"}},
    {id:3,imageUrl:'/constellation-bg.svg',position:"Chief Operating Officer",content:"Co-founder and COO of SchoolAll",media:{facebook:"F",twitter:"",instagram:"I",linkedin:"",github:""}},
    {id:4,imageUrl:'/constellation-bg.svg',position:"Chief Human Resource Officer",content:"Co-founder and CHRO of SchoolAll",media:{facebook:"F",twitter:"",instagram:"I",linkedin:"",github:"G"}}
  ]

  return (
    <div className='pt-5 px-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {
        MEMBERS.map((item:MemberProps,index:number)=>{
          return(
            <MemberComponent key={item.id} {...item}/>
          )
        })
      }

    </div>
  )
}

export default MembersComponent

