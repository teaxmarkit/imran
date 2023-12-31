import { Link } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./NavMenuBarStyle.css";

const NavMenuVariant = {
   initial: {
      opacity: 0,
   },
   final: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.25,
         ease: "easeIn",
      },
      exit: {
         opacity: 0,
      },
   },
};

function NavMenuBar() {
   const [open, setOpen] = useState<boolean>(false);

   const handleOpen = () => {
      setOpen(!open);
   };
   return (
      <>
         <div
            className={open ? "bars-wrapper open" : "bars-wrapper"}
            onClick={handleOpen}
         >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
         </div>
         {open && (
            <AnimatePresence mode="wait">
               <motion.div
                  variants={NavMenuVariant}
                  initial="initial"
                  animate="final"
                  exit="exit"
                  className="menu-bar py-5 shadow-lg text-customPrimary10 rounded"
               >
                  <a
                     onClick={() => setOpen(false)}
                     style={{ textDecoration: "none" }}
                     className="hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300"
                     href="/"
                  >
                     Home
                  </a>
                  <a
                     onClick={() => setOpen(false)}
                     style={{ textDecoration: "none" }}
                     className="hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300"
                     href="/#about-us"
                  >
                     About Us
                  </a>
                  <a
                     onClick={() => setOpen(false)}
                     style={{ textDecoration: "none" }}
                     className="hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300"
                     href="/#courses"
                  >
                     Courses
                  </a>
                  <a
                     onClick={() => setOpen(false)}
                     style={{ textDecoration: "none" }}
                     className="hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300"
                     href="/#gallery"
                  >
                     Gallery
                  </a>
                  <a
                     onClick={() => setOpen(false)}
                     style={{ textDecoration: "none" }}
                     className="hover:bg-customPrimary10 px-10 py-2 rounded hover:text-gray-300"
                     href="/#contact-us"
                  >
                     Contact Us
                  </a>
                  {/* <div className='hover:bg-customPrimary20 hover:cursor-pointer hover:text-gray-400'>Home</div> */}
               </motion.div>
            </AnimatePresence>
         )}
      </>
   );
}

export default NavMenuBar;
