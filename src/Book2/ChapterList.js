import React from 'react'
import './ChapterList.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function ChapterList() {
  return (
    <div className='list'>
        <Link to='/book1'><h2>Chapter 1</h2></Link>
        <Link to='/book2'><h2>Chapter 2</h2></Link>
        <Link to='/book3'><h2>Chapter 3</h2></Link>
        <Link to='/book4'><h2>Chapter 4</h2></Link>
        <Link to='/book5'><h2>Chapter 5</h2></Link>
        <Link to='/book6'><h2>Chapter 6</h2></Link>
        <Link to='/book7'><h2>Chapter 7</h2></Link>
        <Link to='/book8'><h2>Chapter 8</h2></Link>
        <Link to='/book9'><h2>Chapter 9</h2></Link>
         <Link to='/book10'><h2>Chapter 10</h2></Link>
    </div>
  )
}

export default ChapterList