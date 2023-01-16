import { useEffect, useState,useReducer } from 'react'
import './App.css'
import {Theme,Action} from "./App.d";
import { Typography,Button,Stack } from '@mui/material';
import NavMenuBar from './components/NavMenuBar/NavMenuBar';


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
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
        if(state?.themeMode === "dark"){
          window.document.documentElement.classList.add('dark')
        }
        else{
          window.document.documentElement.classList.add('light')
        }
  },[state?.themeMode])

  return (
    <div className='dark bg-grey-200 font-inter pt-5'>
      <NavMenuBar/>
      <Button variant='outlined' color='primary' size= 'small' className='px-2 mx-6'>Change Theme</Button>
      <button onClick={()=> dispatch({type:"THEME",payload:"dark"})} className='bg-blue-300'>Change Theme</button>
      <p className="font-inter text-3xl text-blue-400 lg:text-blue-800">
         Welcome to react
      </p>
      <Stack direction ='row'  gap={3}>
        <Typography variant='body1' className ='bg-blue-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero incidunt ducimus facere placeat voluptatum nesciunt sit eos quisquam nobis, error, adipisci repellendus. Veritatis harum quidem, ipsa placeat nemo atque?
        </Typography>
        <Typography variant='body1' className ='bg-blue-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero incidunt ducimus facere placeat voluptatum nesciunt sit eos quisquam nobis, error, adipisci repellendus. Veritatis harum quidem, ipsa placeat nemo atque?
        </Typography>
      </Stack>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero incidunt ducimus facere placeat voluptatum nesciunt sit eos quisquam nobis, error, adipisci repellendus. Veritatis harum quidem, ipsa placeat nemo atque?
      </Typography>
    </div>
  )
}

export default App
