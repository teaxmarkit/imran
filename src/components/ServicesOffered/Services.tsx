import { Typography,useMediaQuery,useTheme,Box } from '@mui/material';
import React from 'react';
import ServiceProps from './Services.d';

const SerciceComponent = ({title,description,imageUrl}:ServiceProps)=>{

  const mytheme = useTheme();
  const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

   let aboutImgWidth = lessThanTab?"100vw":"50vw";
    return(
        <div data-aos='zoom-in' className='shadow-md p-5 rounded flex flex-col'>
           <img alt='About Us Image' loading='lazy' className='rounded' style={{width:aboutImgWidth,height:"55vh"}} src={imageUrl}/>
          <Box>
            <Typography sx={{margin:"5px",fontWidth:"bold",color:"#18346b"}} variant='h5'>{title}</Typography>
            <Typography sx={{fontFamily:"Poppins-Light"}} variant='body1' className='my-3'>
               {description}
            </Typography>
          </Box>
        </div>
    )
}
function Services() {
  const SERVICES:Array<ServiceProps> = [
    
    {id:1,title:"Desktop Publishing",imageUrl:"/online_payment2.jpg",description:`
    Are you in need of a professional-looking brochure, presentation, or document? Look no further than Global Computer Network's Desktop Publishing services. Our team of experienced designers and layout specialists can help you create visually appealing and impactful materials that effectively communicate your message.
    Whether you're a business looking to promote your products and services, or an individual in need of a well-designed resume or portfolio, we can help. Our services include design, layout, and printing, and we work with you every step of the way to ensure that you're completely satisfied with the final product.
    We offer competitive pricing, fast turnaround times, and a commitment to quality that you can rely on. Contact us today to find out how we can help you create the perfect document for your needs.`},


    {id:2,title:"Mobile Computer School (MCS)",imageUrl:"/software_development.jpg",description:`Are you looking to stay ahead in the ever-evolving world of technology? Global Computer Network's Mobile Computer School can help. Our team of expert instructors offers a range of courses designed to equip you with the latest skills and techniques in computer software, hardware, and mobile devices.
    We use practical, hands-on methods to help you develop real-world skills that you can use immediately. Our courses are affordable and taught in a supportive and friendly environment, ensuring that you receive the best possible education.
    Enroll in Global Computer Network's Mobile Computer School today and discover the benefits of being a technologically savvy individual.`},


    {id:3,title:"Mobile Phone Unlocking And Repairs",imageUrl:"/employee_discussion.jpg",description:`Are you facing problems with your mobile phone? Global Computer Network offers Mobile Phone Unlocking and Repair services that can help. Our team of experts has years of experience in fixing a wide range of mobile device issues, from screen cracks and battery replacements, to software errors and unlocking services.
    We understand how important your device is to you, which is why we offer fast, reliable, and affordable services. Our team uses only the highest-quality parts and equipment to ensure that your device is repaired to the highest standards.
    Whether you're facing a simple issue or a more complex problem, our team has the skills and expertise to resolve it quickly and efficiently. We offer door-to-door services, so you never have to leave the comfort of your own home.
    For all your mobile phone repair and unlocking needs, look no further than Global Computer Network. Contact us today to find out how we can help.`},


    {id:4,title:"Computer Hardware And Software Training",imageUrl:"/employee_discussion.jpg",description:`Do you want to become more efficient and effective in your use of your computer and its various applications? Global Computer Network offers Computer Software and Hardware Training courses that can help. Our team of experienced instructors can teach you how to effectively use your computer, including its software and hardware components.
    Our courses cover a wide range of topics, including operating systems, office applications, programming languages, and more. Whether you're a beginner or an experienced user, we have a course that is tailored to your needs. Our flexible scheduling options allow you to learn at your own pace and on your own schedule.
    We use practical, hands-on methods to help you develop real-world skills that you can use immediately. Our courses are affordable and taught in a supportive and friendly environment, ensuring that you receive the best possible education.
    Enroll in Global Computer Network's Computer Software and Hardware Training courses today and take the first step towards becoming a more confident and capable computer user.`},


    {id:5,title:"Computer Door-To-Door Repair Services (CDDRS)",imageUrl:"/employee_discussion.jpg",description:`Are you facing issues with your computer or laptop? Global Computer Network offers Computer Door-to-Door Repair Services that can help. Our team of experienced technicians can resolve a wide range of issues, from software errors and slow performance, to hardware problems and broken screens.
    We understand how important your device is to you, which is why we offer fast, reliable, and affordable services. Our technicians use only the highest-quality parts and equipment to ensure that your device is repaired to the highest standards.
    Our door-to-door services are designed to make the repair process as convenient as possible for you. Our technicians will come to your home or office to diagnose and repair your device, so you never have to leave the comfort of your own space.
    For all your computer repair needs, look no further than Global Computer Network. Contact us today to find out how we can help.`},


    {id:6,title:"Trained And Qualified Computer Tutors For Hiring",imageUrl:"/employee_discussion.jpg",description:`Are you struggling with a particular aspect of your computer skills? Global Computer Network offers Computer Tutoring Services that can help. Our team of experienced and qualified tutors can provide personalized and one-on-one assistance with a wide range of computer-related topics.
    Whether you're a beginner who needs help with basic computer skills or an advanced user looking to improve your expertise in a specific software application, our tutors are here to help. Our tutors are knowledgeable and patient, and they use a variety of methods to help you learn and understand.
    Our tutoring services are flexible and tailored to meet your individual needs. You can schedule sessions at your convenience, and our tutors are available for in-person or online sessions.
    Enroll in Global Computer Network's Computer Tutoring Services today and receive the expert assistance you need to improve your computer skills.`},
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