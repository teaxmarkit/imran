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
            <Typography className='font-bold font-poppinsMedium text text-lg' variant='h5'>LOGO</Typography>
            {
                !lessThanTab && 
                <Tabs className='md:hidden' sx={{marginRight:65}} textColor='inherit' value={activeTab} onChange ={(e,value) => setActiveTab(value)} indicatorColor ='secondary'>
                    <Tab label='Home'></Tab>
                    <Tab label='About Us'></Tab>
                    <Tab label='Services'></Tab>
                    <Tab label='Contact Us'></Tab>
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