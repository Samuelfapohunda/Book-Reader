import React from 'react'
import './ChapterList.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function ChapterList() {
  return (
    <div className='list'>
        <Link to='/chapter1'><h2>Chapter 1</h2></Link>
        <Link to='/chapter2'><h2>Chapter 2</h2></Link>
        <Link to='/chapter3'><h2>Chapter 3</h2></Link>
        <Link to='/chapter4'><h2>Chapter 4</h2></Link>
        <Link to='/chapter5'><h2>Chapter 5</h2></Link>
        <Link to='/chapter6'><h2>Chapter 6</h2></Link>
        <Link to='/chapter7'><h2>Chapter 7</h2></Link>
        <Link to='/chapter8'><h2>Chapter 8</h2></Link>
        <Link to='/chapter9'><h2>Chapter 9</h2></Link>
         <Link to='/chapter10'><h2>Chapter 10</h2></Link>
    </div>
  )
}

export default ChapterList