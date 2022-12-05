import React from 'react'
import './Header.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function Header() {
  return (
    <div className='head'>
    <div>
    <Tooltip  title={<h3 style={{ color: "white"}}>Return</h3>}>
    <Link to="/"><IconButton className='icon'>
< ArrowBackIcon onClick={window.open.href='..pages/Home'} fontSize='large' />
   </IconButton></Link>
   </Tooltip>
   </div>

     <div>
   <Tooltip  title={<h3 style={{ color: "white"}}>Audio </h3>}>
      <IconButton className='icon'>
   <VolumeUpIcon fontSize='large' />
   </IconButton>
   </Tooltip>

   
<Tooltip title={ <h3 style={{color: "white"}}>Dark Mode</h3>}>
 <IconButton className='moon'>
< DarkModeIcon fontSize='large'/>
</IconButton >
</Tooltip>
</div>
   
    </div>
  )
}

export default Header