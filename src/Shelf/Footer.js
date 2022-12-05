import React from 'react'
import './Footer.css'
import {Tooltip} from '@material-ui/core'
import Person from '@mui/icons-material/Person'
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton } from '@material-ui/core'
import {Home} from '@mui/icons-material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
    <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Home</h3>}>
    <Link to="/">
        <IconButton className='home'>
        <Home fontSize='large'/>
        </IconButton>
        </Link>
        </Tooltip>

<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Shelf</h3>}>
        <IconButton className='home'>
    <LibraryBooksIcon fontSize='large'/> 
        </IconButton>
        </Tooltip>

<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Community</h3>}>
        <IconButton className='home'>
    <LanguageIcon fontSize='large'/> 
        </IconButton>
        </Tooltip>


<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Profile</h3>}>
        <IconButton className='home'>
    <Person fontSize='large'/> 
        </IconButton>
        </Tooltip>
        
    </div>
  )
}

export default Footer