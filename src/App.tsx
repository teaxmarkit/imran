import { useEffect, useState,useReducer,useMemo } from 'react'
import './App.css'
import {Theme,Action} from "./App.d";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header/Header';
import MemberComponent from './components/MemberComponent/MemberComponent';
// import { MemberProps } from './components/MemberComponent/MemberComponent';
import Banner from './components/Banner/Banner';
import {Typography,Divider,useTheme,useMediaQuery} from "@mui/material"
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import { TypographyOptions } from '@mui/material/styles/createTypography';
import ImageGallery from './components/Gallery/ImageGallery';
import SappChat from './components/SappLiveChat/SappChat';


const initialState = {themeMode:'light'} satisfies Theme;

const reducer = (state:Theme = initialState,action:Action)=>{
    switch(action.type){
      case 'THEME':
        return {
          ...state, themeMode:action.payload
        }
      default:
        return state
    }
}

const AppContainer =()=>{

  const mytheme = useTheme();
  const lessThanTab = useMediaQuery(mytheme.breakpoints.down("md"));

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  
  return (<>
        <Header></Header>
        <SappChat/>
        <Banner/>
        <main className='py-10 px-1 md:px-3 md:mx-8'>
          
          <section data-aos='zoom-in' id='about-us' className='my-1'>
             <AboutUs/>
          </section>
      
          <section data-aos='fade-in' id='products' className='my-8'>
          <Typography className='text-center my-3 py-2' fontFamily='Inter' fontWeight='bold' color='primary.main' variant={lessThanTab ?'h4':"h3"}>Products</Typography>
          {/* <h4 className='text-center my-6 text-customPrimary10 text-3xl font-semibold font-inter md:text-5xl opacity-4'>Our Services</h4> */}
          <Divider></Divider>
             <Products/>
          </section>

          <section data-aos='fade-out' id='products' className='my-4'>
          <Typography className='text-center my-6 py-2' fontFamily='Inter' fontWeight='bold' color='primary.main' variant={lessThanTab ?'h4':"h3"}>Portfolio</Typography>
          {/* <h4 className='text-center text-customPrimary10 text-3xl font-semibold font-inter mt-10 mb-6 md:text-5xl opacity-4'>Meet The Team</h4> */}
          <Divider></Divider>
            {/* <MemberComponent/> */}
            <ImageGallery/>
          </section>
         
          <section data-aos='zoom-in' id='contact-us' className='my-8'>
          <Typography className='text-center my-3 py-2' fontFamily='Inter' fontWeight='bold' color='primary.main' variant={lessThanTab ?'h4':"h3"}>Contact Us</Typography>
          {/* <h4 className='text-center text-customPrimary10 text-3xl font-semibold font-inter my-6 md:text-5xl opacity-4'>Contact Us</h4> */}
          <Divider></Divider>
             <ContactUs/>
          </section>
          
        </main>
        <footer>
          <Footer/>
        </footer> 
  </>)
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [members,setMember] = useState<any[]>([1,2,3,4])
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode || state.themeMode === 'dark' ? 'dark' : 'light',
          primary:{
            main: prefersDarkMode || state.themeMode === 'dark'?"#fff":"#421051",
            light:"#381E72",
          }, 
        },
        typography:{
          fontFamily:["Poppins-Medium","Poppins-Light","Inter"].join(","),
      } satisfies TypographyOptions,
      }),
    [prefersDarkMode,state?.themeMode],
  );


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppContainer/>
    </ThemeProvider>
  )
}

export default App
