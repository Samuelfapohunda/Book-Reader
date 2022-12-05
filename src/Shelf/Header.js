import React, {useState} from 'react'
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from '@material-ui/icons';
import {Tooltip} from '@material-ui/core'
import { IconButton } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./Header.css"

function Header() {
  const [style,setStyle] = useState("header");

  const changeStyle = () => {
    setStyle("header2")
  }


  return (
   
      <div className = {style}>
  
        <div className='slime'>
   <TextField
   className='sapa'
   id="outlined-basic"
   variant="outlined"
   fullWidth
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        < IconButton>
      <Search />
        </IconButton>
      </InputAdornment>
    
    ),
    endAdornment: (
      <InputAdornment position="end">
        
      </InputAdornment>
    )
  }}
/>
</div>
<Tooltip placement='top' title={<h3 style={{ color: "Audio"}}>Audio</h3>}>
  < IconButton className = 'volume'>
< VolumeOffIcon fontSize='large' />
</IconButton>
</Tooltip>



<Tooltip title={ <h3 style={{color: "white"}}>Dark Mode</h3>}>
 <IconButton className='moon'>
< DarkModeIcon onClick={changeStyle} fontSize='large'/>
</IconButton >
</Tooltip>
</div>
 
  
  )
}

export default Header
