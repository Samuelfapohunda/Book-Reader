import React from 'react'
import { FormatListBulleted } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'

function Footer() {
  return (
    <div className='footer'>
           <Tooltip  title={<h3 style={{ color: "white"}}>Chapters</h3>}>
           < Link to='/chapters'> <IconButton className='icon'>
   < FormatListBulleted fontSize='large' />
   </IconButton></Link>
   </Tooltip>

   <Tooltip  title={<h3 style={{ color: "white"}}>Add to Favorites</h3>}>
      <IconButton className='icon'>
   < Favorite fontSize='large' />
   </IconButton>
   </Tooltip>

   
   <Tooltip  title={<h3 style={{ color: "white"}}>Next Chapter</h3>}>
    <Link to="/chapter1"><IconButton className='icon'>
< ArrowForward onClick={window.open.href='..pages/Home'} fontSize='large' />
   </IconButton></Link>
   </Tooltip>
    </div>
  )
}

export default Footer