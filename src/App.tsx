import { useEffect, useState,useReducer,useMemo } from 'react'
import './App.css'
import {Theme,Action} from "./App.d";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header/Header';
import MemberComponent from './components/MemberComponent/MemberComponent';
// import { MemberProps } from './components/MemberComponent/MemberComponent';
import Banner from './components/Banner/Banner';
import {Typography,Divider} from "@mui/material"
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/ServicesOffered/Services';
import AOS from 'aos';
import "aos/dist/aos.css";



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


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [members,setMember] = useState<any[]>([1,2,3,4])
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode || state.themeMode === 'dark' ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode,state?.themeMode],
  );

  
useEffect(()=>{
  AOS.init({duration:2000})
},[])


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header></Header>
        <Banner/>
        <main className='py-10 px-3 md:px-3 md:mx-8'>

          <section data-aos='zoom-in' id='about-us' className='my-2'>
             <AboutUs/>
          </section>
      

          <section data-aos='zoom-in' id='services' className='my-2'>
          <h4 className='text-center my-6 text-customPrimary10 text-3xl font-semibold font-inter md:text-5xl opacity-4'>Our Services</h4>
          <Divider></Divider>
             <Services/>
          </section>


          <section data-aos='fade-in' id='team' className='my-4'>
          <h4 className='text-center text-customPrimary10 text-3xl font-semibold font-inter mt-10 mb-6 md:text-5xl opacity-4'>Meet The Team</h4>
          <Divider></Divider>
            <MemberComponent/>
          </section>

         
          <section data-aos='zoom-in' id='contact-us' className='my-2'>
          <h4 className='text-center text-customPrimary10 text-3xl font-semibold font-inter my-6 md:text-5xl opacity-4'>Contact Us</h4>
          <Divider></Divider>
             <ContactUs/>
          </section>
          
        </main>
        <footer>
          <Footer/>
        </footer>
      
    </ThemeProvider>

    
  )
}

export default App
