import React, {useState} from 'react'
import Header from './Header.js' 
import Books from './Books.js';
import Footer from './Footer.js';
import './Shelf.css'
import {Tooltip} from '@material-ui/core'
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Shelf() {


  const [style,setStyle] = useState("shelf");

  const changeStyle = () => {
    setStyle("shelf2")
  }

  return (
    <div className={style}>
         < Header />
         {/* <Tooltip title={ <h3 style={{color: "white"}}>Dark Mode</h3>}>
 <IconButton className='moon'>
< DarkModeIcon onClick={changeStyle} fontSize='large'/>
</IconButton >
</Tooltip> */}
     < Books />
     < Footer />
    </div>
  )
}

export default Shelf