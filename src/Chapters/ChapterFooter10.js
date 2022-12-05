import React from 'react'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ArrowForward } from '@material-ui/icons'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import '../story/Footer.css'

function ChapterFooter10() {
  return (
    <div className='footer'>
           <Tooltip  title={<h3 style={{ color: "white"}}>Return</h3>}>
    <Link to="/chapter9"><IconButton className='icon'>
< ArrowBackIcon onClick={window.open.href='..pages/Home'} fontSize='large' />
   </IconButton></Link>
   </Tooltip>

   
    </div>
  )
}

export default ChapterFooter10