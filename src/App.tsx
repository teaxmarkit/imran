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

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header></Header>
        <Banner/>
        <main className='py-10 px-1 mx-1 md:px-4 md:mx-10'>

          <section id='about-us' className='m-2'>
             <AboutUs/>
          </section>
      

          <section id='services' className='m-2'>
          <h4 className='text-center my-4 text-customPrimary10 text-lx font-semi-bold md:text-3xl'>Our Services</h4>
          <Divider></Divider>
             <Services/>
          </section>


          <section className='m-2'>
          <h4 className='text-center my-4 text-customPrimary10 text-lx font-semi-bold md:text-3xl'>Meet The Team</h4>
          <Divider></Divider>
            <MemberComponent/>
          </section>

         
          <section id='contact-us' className='m-2'>
          <h4 className='text-center my-4 text-customPrimary10 text-lx font-semi-bold md:text-3xl'>Contact Us</h4>
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
