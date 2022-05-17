import React from 'react';
import './BottomNav.css';
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className='bottom-navbar'>
        <a>
        <Link to="/"><i className='fas fa-home'></i></Link>
        </a>
        <a>
        <Link to="/featured"><i className='fas fa-list'></i></Link>
        </a>
        <a>
        <Link to="/arrivals"><i className='fas fa-tags'></i></Link>
        </a>
        <a>
        <Link to="/reviews"><i className='fas fa-comments'></i></Link>
        </a>
        <a>
        <Link to="/blogs"><i className='fas fa-blog'></i></Link>
        </a>
    </nav>
  )
}

export default BottomNav
