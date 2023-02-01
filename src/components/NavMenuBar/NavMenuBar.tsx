import { Link } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './NavMenuBarStyle.css';


const NavMenuVariant = {
  initial:{
    opacity:0,
  },
  final:{
    opacity:1,
    y:0,
    transition:{
      duration:0.25,
      ease:"easeIn"
    },
    exit:{
      opacity:0,

      
    }
  }
}

function NavMenuBar() {
 const [open,setOpen] = useState<boolean>(false);
 
 const handleOpen =()=>{
    setOpen(!open)
 }
  return (
    <>
     <div className={open?'bars-wrapper open':'bars-wrapper'} onClick = {handleOpen}>
        <span className='bar1'>
        </span>
        <span className ='bar2'>
        </span>
        <span className='bar3'>
        </span>
    </div>
    {
            open && 
            <AnimatePresence mode='wait'>
              <motion.div variants={NavMenuVariant} initial="initial" animate='final' exit="exit" className='menu-bar py-5 shadow-md text-customPrimary10 rounded'>
                <Link sx={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/'>Home</Link>
                <Link sx={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#about-us'>About Us</Link>
                <Link sx={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#services'>Our Services</Link>
                <Link sx={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#team'>Team Members</Link>
                <Link sx={{textDecoration:"none"}} className='hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300' href='/#contact'>Contact Us</Link>
                {/* <div className='hover:bg-customPrimary20 hover:cursor-pointer hover:text-gray-400'>Home</div> */}
            </motion.div>
            </AnimatePresence>
            
        }
    </>
   
  )
}

export default NavMenuBar