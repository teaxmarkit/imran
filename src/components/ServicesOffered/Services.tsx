import { Typography,useMediaQuery,useTheme,Box } from '@mui/material';
import React from 'react';
import ServiceProps from './Services.d';

const SerciceComponent = ({title,description,imageUrl}:ServiceProps)=>{

  const mytheme = useTheme();
  const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

   let aboutImgWidth = lessThanTab?"100vw":"50vw";
    return(
        <div className='shadow-md p-5 rounded flex flex-col'>
           <img alt='About Us Image' loading='lazy' className='rounded' style={{width:aboutImgWidth,height:"70vh"}} src={imageUrl}/>
          <Box>
            <Typography sx={{margin:"5px",fontWidth:"bold"}} variant='h5'>{title}</Typography>
            <Typography sx={{fontFamily:"Poppins-Light"}} variant='body1' className='my-3'>
               {description}
            </Typography>
          </Box>
        </div>
    )
}
function Services() {
  const SERVICES:Array<ServiceProps> = [
    {id:1,title:"Online Payment Services",imageUrl:"/online_payment2.jpg",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
    {id:2,title:"Software Development",imageUrl:"/software_development.jpg",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
    {id:3,title:"School Management services",imageUrl:"/employee_discussion.jpg",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
  ]

 

  return (
    <div className='pt-5 px-2 grid grid-cols-1 gap-4 md:grid-cols-3'>
    {
        SERVICES.map((item:ServiceProps,index:number)=>{
            return(
                <SerciceComponent key = {item?.id} {...item}/>
            )

        })
    }

    </div>
  )
}

export default Services