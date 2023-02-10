import React from 'react';
import Typography from '@mui/material/Typography';
import {IconButton } from '@mui/material';
import {FacebookOutlined,Twitter,Instagram,LinkedIn,GitHub} from "@mui/icons-material";
import './Footer.css';

function Footer() {
  return (
    <div className='p-5 shadow-lg bg-customPrimary10 bottom-0 grid grid-cols-1 md:grid-cols-3'>
        <div className='my-3 flex flex-col items-start justify-start'>
            <Typography  sx={{fontFamily:"Inter",fontWeight:"bold",color:"white"}} variant='h5'>Global Computer Network</Typography>
            {/* <Typography variant='h4' className='text-gray-400 font-semibold font-poppinsMedium'>SchoolAll</Typography> */}
            <p className='text-gray-500'><span>&#169; Copywrite 2023</span></p>
        </div>
        <div className='flex flex-col items-start justify-start text-gray-300'>
            <a style={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/'>Home</a>
            <a style={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#about-us'>About Us</a>
            <a style={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#services'>Our Services</a>
            <a style={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#team'>Team Members</a>
            <a style={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#contact'>Contact Us</a>
        </div>
        <div className='d-flex flex-col items-start justify-start my-2 text-gray-400'>
            <div className='flex flex-row justify-start text-gray-400 items-start py-3'>
                <IconButton aria-label="delete">
                    <FacebookOutlined className='text-gray-400' />
                </IconButton>
                <IconButton aria-label="delete">
                    <Twitter className='text-gray-400' />
                </IconButton>
                <IconButton aria-label="delete">
                    <Instagram className='text-gray-400' />
                </IconButton>
                <IconButton size='medium' aria-label="delete">
                    <GitHub className='text-gray-400' />
                </IconButton>
                <IconButton aria-label="delete">
                    <LinkedIn className='text-gray-400' />
                </IconButton>
            </div>
            
        </div>
       
    </div>
  )
}

export default Footer