import Shelf from './Shelf/Shelf'
import Story from './story/Story'
import Chapter1 from './Chapters/Chapter1'
import ErrorPage from './story/ErrorPage';
import Chapters from './Chapters/Chapters';
import Chapter2 from './Chapters/Chapter2'
import Chapter3 from './Chapters/Chapter3'
import Chapter4 from './Chapters/Chapter4'
import Chapter5 from './Chapters/Chapter5'
import Chapter6 from './Chapters/Chapter6'
import Chapter7 from './Chapters/Chapter7'
import Chapter8 from './Chapters/Chapter8'
import Chapter9 from './Chapters/Chapter9'
import Chapter10 from './Chapters/Chapter10'
import Book2Chapters from './Book2/Chapters';
import Book2Chapter1 from './Book2/Chapter1'
import Book2Chapter2 from './Book2/Chapter2'
import Book2Chapter3 from './Book2/Chapter3'
import Book2Chapter4 from './Book2/Chapter4'
import Book2Chapter5 from './Book2/Chapter5'
import Book2Chapter6 from './Book2/Chapter6'
import Book2Chapter7 from './Book2/Chapter7'
import Book2Chapter8 from './Book2/Chapter8'
import Book2Chapter9 from './Book2/Chapter9'
import Book2Chapter10 from './Book2/Chapter10'

import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="app">
    <Router>
      {/* <nav>
   <Link to="/">Home</Link>
   <Link to="/story">Story</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Shelf />} />
        <Route path="/story" element={<Story/>} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/chapter2' element={<Chapter2 />} />
        <Route path='/chapter3' element={<Chapter3 />} />
        <Route path='/chapter4' element={<Chapter4 />} />
        <Route path='/chapter5' element={<Chapter5 />} />
        <Route path='/chapter6' element={<Chapter6 />} />
        <Route path='/chapter7' element={<Chapter7 />} />
        <Route path='/chapter8' element={<Chapter8 />} />
        <Route path='/chapter9' element={<Chapter9 />} />
        <Route path='/chapter10' element={<Chapter10 />} />

        <Route path='/content' element={<Book2Chapters />} />
        <Route path='/book1' element={<Book2Chapter1 />} />
        <Route path='/book2' element={<Book2Chapter2 />} />
        <Route path='/book3' element={<Book2Chapter3 />} />
        <Route path='/book4' element={<Book2Chapter4 />} />
        <Route path='/book5' element={<Book2Chapter5 />} />
        <Route path='/book6' element={<Book2Chapter6 />} />
        <Route path='/book7' element={<Book2Chapter7 />} />
        <Route path='/book8' element={<Book2Chapter8 />} />
        <Route path='/book9' element={<Book2Chapter9 />} />
        <Route path='/book10' element={<Book2Chapter10 />} />
      </Routes>
    </Router>
  
   
    </div>
  );
}

export default App;
