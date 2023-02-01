import { Divider, Tab, Tabs } from '@mui/material';
// import AOS from 'aos';
import React, { useEffect } from 'react';
import './AboutUs.css';
// import "aos/dist/aos.css";




function AboutUs() {
const[activeTab,setActiveTab] = React.useState<number>(0);

// useEffect(()=>{
//     AOS.init({duration:1000})
// },[])


  return (
   <div className='my-2 mb-4 pb-3'>
   <h4 className='text-center mb-5 text-customPrimary10 text-3xl font-semibold font-inter md:text-5xl md:mb-8'>About Us</h4>
   <Divider></Divider>
    <div className='flex w-100 flex-col mt-2 gap-5 justify-center md:flex-row'>
        <img alt='About Us Image' className='w-100 rounded' src='/constellation-bg.svg'/>
        <div>
        <h4 className='text-center text-customPrimary10 text-2xl font-inter md:text-4xl'>SchoolAll Company Here To Digitize Education</h4>
            <Tabs className='md:hidden' textColor='inherit' value={activeTab} onChange ={(e,value) => setActiveTab(value)} indicatorColor ='secondary'>
                <Tab label='Mission'></Tab>
                <Tab  label='Vission'></Tab>
                <Tab label='Product And Services'></Tab>
                {/* <Tab href='#contact-us' label='Contact Us'></Tab> */}
            </Tabs>
            <div className='p-4'>
                {activeTab === 0 && 
                     <div>
                        <p className='font-poppinsLight text-lg'>
                          Being lovers of learning, we are unsatisfied with the quality of education delivered to pupils and the management of schools in our nation. The additional effort and finance required to secure quality education; being disadvantaged when one lacks the resources to do such; the ordeals in obtaining school admission, school transfer, statement of results and more; are some ‌reasons for poor education quality and poor performance in national and regional examinations. At SchoolAll, we are passionate about such matters and aim to provide solutions by creating an online platform for learning management and school management.
                        </p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, odit. Expedita voluptates a, voluptatibus fugit vel nihil ut quidem reprehenderit iste alias aperiam quaerat rem dolorum modi velit id natus?</p> */}
                    </div>}
                {activeTab === 1 && 
                    <div>
                        <p className='font-poppinsLight text-lg'>
                        SchoolAll LMS is a Learning Management System that delivers video tutorials and lecture notes under the government approved syllabi. These contents are produced by highly qualified and renowned tutors.
                        SchoolAll SMS is a School Management System that is structured to automate student admission, student transfer, staff recruitment, calendar management, course plans, financial bookkeeping, record keeping and performance tracking. All of these can be accessed and manipulated by school admins and parents.
                         </p>
                   </div>}
                {activeTab === 2 && 
                     <div>
                         <p className='font-poppinsLight text-lg'>
                            Despite having our nation at heart, we refuse to be limited. Therefore, we plan on extending our services to the rest of West Africa and beyond and‌, incorporate other syllabi like IGCSE, GCSE, SAT and JAMB.
                         </p>
                    </div>}
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs