import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Routes, } from 'react-router-dom';
import ReactDOM from 'react-dom';
import RouterPage1 from './routePage';
import RouterPage2 from './RoutePage2';
import NotFound from './notFound';

const rounting = (
  <Router>
    <div>
      <h1>First page load</h1>
      <ul>
        <NavLink activestyle={{color:'red'}} to="/">RouterPage1</NavLink>
        <Link to="/r">RouterPage2</Link>
      </ul>
      <Routes>
      <Route exact path="/" element={<RouterPage1/>} />
      <Route path="/r" element={<RouterPage2/>} />
      <Route path='' element={<NotFound/>}/>
      </Routes>
      
    </div>
  </Router>
)

ReactDOM.render(rounting, document.getElementById('root'))

