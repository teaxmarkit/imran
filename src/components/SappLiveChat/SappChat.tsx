import React from 'react';
import {motion} from 'framer-motion'
import { Button, IconButton, TextField, Tooltip } from '@mui/material';
import { Send } from '@mui/icons-material';

function SappChat() {
  return (
    <motion.div drag  className='absolute z-50 bottom-20 left-40'>
        <Tooltip title='Chat'>
            <div>
                
            </div>
        </Tooltip>
        <div>
            <form className='gap-2'>
                <TextField label='Chat On WhatsApp' multiline size='small' sx={{height:"4vh",marginRight:'3px'}}>
                </TextField>
                <IconButton color='primary'><Send></Send></IconButton>
                {/* <Button  endIcon={} size='small' disableElevation variant='contained'>send</Button> */}
            </form>
        </div>
    </motion.div>
  )
}

export default SappChat