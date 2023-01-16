import React,{useState} from 'react'
import './NavMenuBarStyle.css'
import {BarProps} from "./NavMenuBar.d"

function NavMenuBar() {
 const [open,setOpen] = useState<boolean>(false);
 
 const handleOpen =()=>{
    setOpen(!open)
 }
  return (
    <div className={open?'bars-wrapper open':'bars-wrapper'} onClick = {handleOpen}>
        <span className='bar1'>
        </span>
        <span className ='bar2'>
        </span>
        <span className='bar3'>
        </span>
        {
            open && 
            <div className='menu-bar'>
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
            </div>
        }
       
    
    </div>
  )
}

export default NavMenuBar