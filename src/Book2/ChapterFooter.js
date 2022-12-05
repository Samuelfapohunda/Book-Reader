import React from 'react'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ArrowForward } from '@material-ui/icons'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import '../story/Footer.css'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function ChapterFooter() {
  return (
    <div className='footer'>
           <Tooltip  title={<h3 style={{ color: "white"}}>Return</h3>}>
    <Link to="/book1"><IconButton className='icon'>
< ArrowBackIcon onClick={window.open.href='..pages/Home'} fontSize='large' />
   </IconButton></Link>
   </Tooltip>

   <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Shelf</h3>}>
<Link to="/">  <IconButton className='home'>
    <LibraryBooksIcon fontSize='large'/> 
        </IconButton> </Link>
        </Tooltip>

   <Tooltip  title={<h3 style={{ color: "white"}}>Next Chapter</h3>}>
    <Link to="/book3"><IconButton className='icon'>
< ArrowForward onClick={window.open.href='..pages/Home'} fontSize='large' />
   </IconButton></Link>
   </Tooltip>
    </div>
  )
}

export default ChapterFooter