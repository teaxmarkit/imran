import { Divider, Tab, Tabs,useTheme,useMediaQuery,Typography } from '@mui/material';
// import AOS from 'aos';
import React, { useEffect } from 'react';
import './AboutUs.css';
// import "aos/dist/aos.css";




function AboutUs() {
const[activeTab,setActiveTab] = React.useState<number>(0);
const mytheme = useTheme();
const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

let aboutImgWidth = lessThanTab?"100vw":"50vw";

// useEffect(()=>{
//     AOS.init({duration:1000})
// },[])


  return (
   <div className='my-2 mb-2 shadow'>
     <Typography className='text-center pb-2' fontFamily='Inter' fontWeight='bold' color='primary.main' variant={lessThanTab ?'h4':"h3"}>About Us</Typography>
   {/* <h4 className='text-center mb-5 text-customPrimary10 text-3xl font-semibold font-inter md:text-5xl md:mb-8 opacity-4'>About Us</h4> */}
   {/* <Divider></Divider> */}
    <div className='flex w-100 flex-col mt-2 gap-5 justify-center lg:flex-row'>
        <img alt='About Us Image' className='rounded' style={{width:aboutImgWidth}} src='/logo.jpg'/>
        <div>
        {/* <h4 className='text-center text-customPrimary20 text-2xl font-inter md:text-4xl'>SchoolAll Company Here To Digitize Education</h4> */}
            <div className='p-4'>
              <div>
                <p className='font-poppinsLight text-md'>
                  <p>
                     Welcome to Global Computer Network, where technology meets convenience. We are a one-stop-shop for all your tech needs, offering a range of services designed to make your life easier and more efficient.
                  </p>
                  <p>
                  Our services include Desktop Publishing, where we can help you create professional and eye-catching documents, brochures, and presentations. We also offer Mobile Computer School, where you can learn the latest skills and techniques in the world of technology.
                  </p>
                  <p>
                  For those with mobile phone problems, we offer Mobile Phone Unlocking and Repair services. Our team of experts can help you resolve any issues you may be facing with your device.
                  </p>
                  <p>
                  We also provide Computer Software and Hardware Training, where you can learn how to effectively use your computer and its various applications. Our door-to-door Computer Repair services ensure that you never have to go through the hassle of bringing your device to a repair shop.
                  </p>
                  <p>
                  Lastly, for those in need of expert tutors, we have a pool of trained and qualified tutors who are available for hire.
                  </p>
                  <p>
                  At Global Computer Network, we are dedicated to providing you with the best possible service and support. Contact us today to find out how we can help you stay ahead in the world of technology."
                  </p>
                  
                  
                </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs