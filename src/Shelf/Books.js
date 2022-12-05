import React from 'react'
import "./Books.css"
import { IconButton } from '@mui/material';
import image from '../images/percy1.jpeg'
import slime from '../images/percy2.jpeg'
import slatt from '../images/grisha.jpeg'
import sapa from '../images/percy4.jpeg'
import rick from '../images/harry.jpeg'
import alex from '../images/percy5.jpeg'
import { LinearProgress, Tooltip } from '@material-ui/core'
import { Share } from '@mui/icons-material'
import { Recommend } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function Books() {
  return (
    <div className='container'>
        <div className='container-1'>
        <div className='book-1'>
            <div>
  <Link to='/story'> <img src= {image} height='270px'  width={'220px'} alt="book" /></Link>
       </div>
       <div className='progress'>
        
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>

   
        </div>

        <div className='book-2'>
        <div>
        <Link to='/content'> <img src= {slime} height='270px' width={'220px'} alt="book" /></Link>
       </div>
       <div className='progress'>
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>
        </div>
    </div>

    <div className='container-2'>
        <div className='book-3'>
        <div>
   <img src= {sapa} height='270px' width={'220px'} alt="book" />
       </div>
       <div className='progress'>
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>
      
        </div>

        <div className='book-4'>
        <div>
   <img src= {slatt} height='270px' width={'220px'} alt="book" />
       </div>
       <div className='progress'>
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>
            </div>

        </div>

    
        <div className='container-2'>
        <div className='book-5'>
        <div>
   <img src= {rick} height='270px' width={'220px'} alt="book" />
       </div>
       <div className='progress'>
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>
      
        </div>

        <div className='book-6'>
        <div>
   <img src= {alex} height='270px' width={'220px'} alt="book" />
       </div>
       <div className='progress'>
       <LinearProgress variant='determinate' value='progress'  />
       </div>
       <div className='shareIcon'>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Share</h3>}>
       < IconButton className='share'>
      < Share fontSize='large'/>
      </IconButton>
      </Tooltip>
       <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Recommend</h3>}>
      < IconButton className='recommend'>
      < Recommend fontSize='large'/>
      </IconButton>
      </Tooltip>
      <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Favourite</h3>}>
      < IconButton className='favorite'> 
      < Favorite fontSize='large'/>
       </IconButton>
       </Tooltip>
  </div>
            </div>

        </div>


    </div>

    
  )
}

export default Books