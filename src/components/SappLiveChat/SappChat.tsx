import React from 'react';
import {motion} from 'framer-motion'
import { Modal, IconButton, TextField, Tooltip,SpeedDial,SpeedDialAction,SpeedDialIcon } from '@mui/material';
import { Send,Chat,WhatsApp,Close} from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';


function SappChat() {
  const [sappMsg,setSappMsg] = React.useState<string>("")
  const [showChatBox,setShowChatBox] = React.useState<boolean>(false)

  const handleSappForm =(e:React.FormEvent)=>{
      e.preventDefault();
      setSappMsg("")
  }
  return (
    <div className='flex flex-col '>
      <Modal open={showChatBox} onClose={()=> setShowChatBox(false)}>
      <motion.div className='flex relative flex-col justify-center items-center h-80 bg-white'>
        <span className='absolute top-5 right-10 z-40'><Close color='primary' onClick = {()=> setShowChatBox(false)}/></span>
        <form onSubmit={handleSappForm} className='gap-2 flex flex-row rounded text-white'>
            <TextField className='text-white' type="text" value={sappMsg} label='Chat On WhatsApp' multiline size='small' color='success' onChange={e => setSappMsg(e.target.value)} sx={{height:"4vh",marginRight:'3px',color:"white"}}>
            </TextField>
            <ReactWhatsapp element='webview' number='+23279027241'  message={sappMsg}> <IconButton ><Send color='success'></Send></IconButton></ReactWhatsapp>
          
            {/* <Button  endIcon={} size='small' disableElevation variant='contained'>send</Button> */}
        </form>
       </motion.div>
      </Modal>
       <div className='z-40'>
       <Tooltip title='Chat'>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: 'fixed', top: '70%', right: 50 }}
          icon={<SpeedDialIcon openIcon={<Chat/>}/>}
        >
          <SpeedDialAction icon={<WhatsApp/>} onClick={()=> setShowChatBox(true)} tooltipTitle="Chat on WhatsApp"/>
       </SpeedDial>
        </Tooltip>
       </div>
       
       
    </div>
  )
}

export default SappChat