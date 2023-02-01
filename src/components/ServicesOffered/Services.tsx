import { Typography } from '@mui/material';
import React from 'react';
import ServiceProps from './Services.d';

const SerciceComponent = ({title,description}:ServiceProps)=>{
    return(
        <div className='shadow-md p-5 rounded w-min-'>
            <h4 className='text-center text-customPrimary10 text-2xl font-inter md:text-4xl dark:text-gray-700'>{title}</h4>
            <p className='font-poppinsLight text-lg my-3 md:text-lg'>
               {description}
            </p>
        </div>
    )
}
function Services() {
  const SERVICES:Array<ServiceProps> = [
    {id:1,title:"Our School Management services",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
    {id:2,title:"Our School Management services",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
    {id:3,title:"Our School Management services",description:"A comprehensive solution designed to streamline and automate the administrative and operational functions of your school. Our team of experienced professionals will work closely with you to understand your school's unique needs and develop a customized solution that will help to improve efficiency, communication, and security."},
  ]
  return (
    <div className='pt-5 px-2 grid grid-cols-1 gap-4 md:grid-cols-3'>
    {
        SERVICES.map((item:ServiceProps,index:number)=>{
            return(
                <SerciceComponent key = {item?.id} title={item?.title} description={item?.description}/>
            )

        })
    }

    </div>
  )
}

export default Services