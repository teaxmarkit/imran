import {Stack,Typography,useMediaQuery,useTheme} from "@mui/material"
import React from 'react';
import './Banner.css';
import {motion} from 'framer-motion'

const bannerImageVariant = {
    initial:{
        y:20,
     },
    final:{
        y:0,
       
    }
    
}

const bannerTextContentVariant = {
    initial:{
        opacity:0
      
    },
    final:{
        opacity:1,
        transition:{
            duration:1,
            ease:"easeInOut",
            staggerChildren:1
        }
    }
    
}
const bannerTitleVariant = {
    initial:{
        opacity:0
      
    },
    final:{
        opacity:1,
        transition:{
            duration:1,
            ease:"easeInOut",
            delay:0.5
        }
    }
    
}

const bannerTextVariant = {
    initial:{
        opacity:0
      
    },
    final:{
        opacity:1,
        transition:{
            duration:1,
            ease:"easeInOut"
        }
    }
    
}

function Banner() {

    
  const mytheme = useTheme();
  const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

  let bannerHeight = lessThanTab?"60vh":"100vh";
  return (
    <div className='banner bg-blue flex flex-col-reverse items-center justify-between md:flex-row ' style={{height:bannerHeight}}>
        <motion.div variants={bannerTextContentVariant} initial='initial' animate='final' className='bg-transparent mx-5 p-2 md:px-10'>
            <motion.h1 variants={bannerTitleVariant}  className="text-2xl text-white font-bold font-poppinsMedium md:text-5xl" color='white'>Global Computer Network</motion.h1>
            <motion.p variants={bannerTextVariant}  className="my-2 text-gray-100">We offer IT services and sales</motion.p>
        </motion.div>
        {/* <img  className="m-10 w-30"  src='/IT5.jpg' alt="Banner Image" /> */}
    </div>
  )
}

export default Banner