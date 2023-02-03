import React from 'react';
import './Header.css';
import { AppBar,Toolbar,Tabs,Tab, Typography,useMediaQuery,useTheme } from '@mui/material';
import NavMenuBar from '../NavMenuBar/NavMenuBar';



function Header() {

 const[activeTab,setActiveTab] = React.useState<number>(0);
 const theme = useTheme();
 const lessThanTab = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position='fixed' sx={{background:'#21005D88'}}>
        <Toolbar className='flex flex-row justify-between bg-transparent'>
            <Typography sx={{fontFamily:"Inter",fontWeight:"bold"}} variant='h5'>School<Typography sx={{fontFamily:"Inter",display:"inline",fontWeight:"bold"}} variant='h5' color='secondary'>All</Typography></Typography>
            {/* <SVGLogo/> */}
            {
                !lessThanTab && 
                <Tabs className='md:hidden' sx={{marginRight:65}} textColor='inherit' value={activeTab} onChange ={(e,value) => setActiveTab(value)} indicatorColor ='secondary'>
                    <Tab href='#' label='Home'></Tab>
                    <Tab href='#about-us' label='About Us'></Tab>
                    <Tab href='#services' label='Services'></Tab>
                    <Tab href='#team' label='Team Members'></Tab>
                    <Tab href='#contact-us' label='Contact Us'></Tab>
                </Tabs>
            }
            {
                lessThanTab &&
                <NavMenuBar/>

            }
           
        </Toolbar>
    </AppBar>

  )
}

export default Header