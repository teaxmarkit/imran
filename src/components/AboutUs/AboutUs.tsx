import {
   Divider,
   Tab,
   Tabs,
   useTheme,
   useMediaQuery,
   Typography,
} from "@mui/material";
// import AOS from 'aos';
import React, { useEffect } from "react";
import "./AboutUs.css";
// import "aos/dist/aos.css";

function AboutUs() {
   const [activeTab, setActiveTab] = React.useState<number>(0);
   const mytheme = useTheme();
   const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

   let aboutImgWidth = lessThanTab ? "100vw" : "40vw";

   // useEffect(()=>{
   //     AOS.init({duration:1000})
   // },[])

   return (
      <div className="my-2 mb-2">
         <Typography
            className="text-center pb-2"
            fontFamily="Inter"
            fontWeight="bold"
            color="primary.main"
            variant={lessThanTab ? "h4" : "h3"}
         >
            About Us
         </Typography>
         {/* <h4 className='text-center mb-5 text-customPrimary10 text-3xl font-semibold font-inter md:text-5xl md:mb-8 opacity-4'>About Us</h4> */}
         {/* <Divider></Divider> */}
         <div className="flex w-100 flex-col mt-2 gap-5 justify-center lg:flex-row">
            <img
               alt="About Us Image"
               className="rounded"
               style={{ width: aboutImgWidth }}
               src="/hospital/about.png"
            />
            <div>
               {/* <h4 className='text-center text-customPrimary20 text-2xl font-inter md:text-4xl'>SchoolAll Company Here To Digitize Education</h4> */}
               <div className="p-4">
                  <div className="font-poppinsLight text-md">
                     <p>
                        Welcome to Al-Imran Clinic and Nursing Training
                        Institution, a distinguished center of educational
                        excellence dedicated to shaping futures and building
                        careers. As a beacon of learning, we take immense pride
                        in offering a rich tapestry of certificate and diploma
                        courses that cater to a wide spectrum of aspirations.
                        Our institution stands as a testament to our unwavering
                        commitment to nurturing talent, fostering innovation,
                        and empowering individuals to become architects of their
                        destiny.
                     </p>
                     <br></br>
                     <p>
                        At Al-Imran, we understand that education is the
                        cornerstone of personal growth and societal progress.
                        With this belief as our guiding principle, we have
                        curated a diverse array of courses that resonate with
                        the ever-evolving demands of the professional landscape.
                        Our holistic approach to education goes beyond textbooks
                        and classrooms, embracing practicality, critical
                        thinking, and experiential learning.
                     </p>
                     <br></br>
                     <p>
                        At Al-Imran Clinic and Nursing Training Institution, we
                        view education as a transformative force that has the
                        power to shape individuals and communities. Join our
                        vibrant academic community, where learning transcends
                        boundaries and dreams find a nurturing ground to
                        flourish. Enroll today and take the definitive step
                        towards a future illuminated by knowledge, purpose, and
                        limitless possibilities.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutUs;
