import React from 'react';
import {Typography} from "@mui/material";
import {CustomMapComponent} from "../MapComponent/MapComponent"
import ContactForm from '../ContactForm/ContactForm';


function ContactUs() {
  return (
    <div>
        <Typography variant='h5'>Contact Us</Typography>
        <CustomMapComponent/>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
}

export default ContactUs