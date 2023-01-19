import React, { useEffect } from 'react';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useReducer } from 'react';
import {ContactFormObject,Action} from "./ContactForm.d";
import { MailOutline,SmartphoneOutlined,PlaceOutlined } from '@mui/icons-material';

const initialState = {
    fullname:"",
    email:"",
    subject:"",
    message:""

} satisfies ContactFormObject;


const reducer = (state:ContactFormObject = initialState,action:Action)=>{
    switch(action.type){
        case 'FULLNAME':
            return {...state,fullname:action.payload};
        case 'EMAIL':
            return {...state,email:action.payload};
        case 'SUBJECT':
            return {...state,subject:action.payload};
        case 'MESSAGE':
            return {...state,message:action.payload};
        default:
            return state
            
        }

}

function ContactForm() {
    const [formObjectState,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        console.log(formObjectState);

    },[])

    const handleContactForm =(e:React.FormEvent)=>{
        e.preventDefault();
        console.log(formObjectState);
    }

  return (
    <div className='flex my-4 flex-col p-2 justify-center gap-10 shadow-md pb-10 md:flex-row md:gap-20'>
        <div className='pt-1 px-2 md:pt-4'>
            <Stack direction ="column">
               <div className='flex flex-row items-center justify-start gap-3 my-2'>
                   <PlaceOutlined className='text-customPrimary20' fontSize='large'></PlaceOutlined>
                   <div>
                        <Typography className='font-semibold font-inter'>Location</Typography>
                        <Typography className='text-md text-gray-500'>12 Circular Road</Typography>
                   </div>
               </div>
               <div className='flex flex-row items-center justify-start gap-3 my-2'>
                   <MailOutline className='text-customPrimary20' fontSize='large'></MailOutline>
                   <div>
                        <Typography>Email</Typography>
                        <Typography className='text-md text-gray-500'>email@gmail.com</Typography>
                   </div>
               </div>
               <div className='flex flex-row items-center justify-start gap-3 my-2'>
                   <SmartphoneOutlined className='text-customPrimary20' fontSize='large'></SmartphoneOutlined>
                   <div>
                        <Typography>Call</Typography>
                        <Typography className='text-md text-gray-500'>+23288 722317</Typography>
                   </div>
               </div>
              

            </Stack>
        </div>
        <div className='pt-1 px-2 md:pt-4 md:px-2'>
            <form className='flex flex-col justify-center items-start gap-5' onSubmit={handleContactForm}>
                <div className='flex flex-row items-center justify-center gap-2 md:flex-row'>
                   <TextField onChange={(e)=> dispatch({type:'FULLNAME',payload:e.target.value})} size='small' type='text' fullWidth className='' variant='outlined' label='Full Name' required></TextField>
                   <TextField onChange={(e)=> dispatch({type:'EMAIL',payload:e.target.value})} size='small' type='email' fullWidth variant='outlined' label='Email' required></TextField>
                </div>
                <TextField onChange={(e)=> dispatch({type:'SUBJECT',payload:e.target.value})} size='small'  fullWidth variant='outlined' label='Subject' required></TextField>
                <TextField onChange={(e)=> dispatch({type:'MESSAGE',payload:e.target.value})} size='small' multiline minRows={3} fullWidth variant='outlined' label='Message' required></TextField>
                <button className='bg-customPrimary20 px-3 py-1 text-gray-300 rounded'>Submit</button>
            </form>
        </div>
       
    </div>
   
  )
}

export default ContactForm