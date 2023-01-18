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
        <div className='pt-5 px-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {members?.map(member =>{
            return( <MemberComponent key={member}></MemberComponent> )
          })
            }
         
        </div>
    </ThemeProvider>

    
  )
}

export default App
