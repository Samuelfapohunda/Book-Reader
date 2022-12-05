import React from 'react'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import '../story/Footer.css'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function ChapterFooter1() {
  return (
    <div className='footer'>
<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Shelf</h3>}>
<Link to="/">  <IconButton className='home'>
    <LibraryBooksIcon fontSize='large'/> 
        </IconButton> </Link>
        </Tooltip>

       <Tooltip  title={<h3 style={{ color: "white"}}>Next Chapter</h3>}>
    <Link to="/chapter2">
        <IconButton className='icon'>
 <ArrowForward fontSize='large' />
   </IconButton>
   </Link>
   </Tooltip>
    </div>
  )
}

export default ChapterFooter1