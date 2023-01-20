import React from 'react';
import Typography from '@mui/material/Typography';
import {IconButton } from '@mui/material';
import {FacebookOutlined,Twitter,Instagram,LinkedIn,GitHub} from "@mui/icons-material";
import './Footer.css';

function Footer() {
  return (
    <div className='p-5 shadow-lg bg-customPrimary10 bottom-0 flex items-start flex-col md:flex-row md:justify-around'>
        <div>
            <Typography variant='h4' className='text-gray-200 font-poppinsMedium'>SchoolAll</Typography>
            <p className='text-gray-500'><span>&#169; Copywrite 2023</span></p>

        </div>
        <div className='d-flex flex-col text-white'>
            <ol>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ol>
        </div>
        <div className='d-flex flex-col text-gray-400'>
            <div className='flex flex-row justify-center text-white items-center py-3'>
                <IconButton aria-label="delete">
                    <FacebookOutlined className='text-white' />
                </IconButton>
                <IconButton aria-label="delete">
                    <Twitter className='text-white' />
                </IconButton>
                <IconButton aria-label="delete">
                    <Instagram className='text-white' />
                </IconButton>
                <IconButton size='medium' aria-label="delete">
                    <GitHub className='text-white' />
                </IconButton>
                <IconButton aria-label="delete">
                    <LinkedIn className='text-white' />
                </IconButton>
            </div>
            
          </div>
       
    </div>
  )
}

export default Footer