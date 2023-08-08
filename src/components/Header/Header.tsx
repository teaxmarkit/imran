import React from "react";
import "./Header.css";
import {
   AppBar,
   Toolbar,
   Tabs,
   Tab,
   Typography,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import NavMenuBar from "../NavMenuBar/NavMenuBar";

function Header() {
   const [activeTab, setActiveTab] = React.useState<number>(0);
   const theme = useTheme();
   const lessThanTab = useMediaQuery(theme.breakpoints.down("md"));
   const imgWidth = lessThanTab ? "10vw" : "4vw";
   return (
      <AppBar position="fixed" className="bg-customPrimary10">
         <Toolbar
            className="flex flex-row justify-between"
            sx={{ justifyContent: "space-between" }}
         >
            <img
               src="/logo.jpg"
               alt="Logo"
               className="mx-4 my-2"
               style={{ width: imgWidth, mixBlendMode: "darken", zIndex: 10 }}
            />
            {!lessThanTab && (
               <Tabs
                  className="md:hidden"
                  sx={{ marginRight: 45 }}
                  textColor="inherit"
                  value={activeTab}
                  onChange={(e, value) => setActiveTab(value)}
                  indicatorColor="primary"
               >
                  <Tab
                     color="primary"
                     sx={{ color: "#fff" }}
                     href="#"
                     label="Home"
                  ></Tab>
                  <Tab
                     color="primary"
                     sx={{ color: "#fff" }}
                     href="#about-us"
                     label="About Us"
                  ></Tab>
                  <Tab
                     color="primary"
                     sx={{ color: "#fff" }}
                     href="#courses"
                     label="Courses"
                  ></Tab>
                  <Tab
                     color="primary"
                     sx={{ color: "#fff" }}
                     href="#gallery"
                     label="Gallery"
                  ></Tab>
                  <Tab
                     color="primary"
                     sx={{ color: "#fff" }}
                     href="#contact-us"
                     label="Contact Us"
                  ></Tab>
               </Tabs>
            )}

            {lessThanTab && <NavMenuBar />}
         </Toolbar>
      </AppBar>
   );
}

export default Header;
