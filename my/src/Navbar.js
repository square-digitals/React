import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(

        <div  className='header'>
            <h2>HEloooooo</h2>

            <ul>
                <Link to='/'> <li> Home </li> </Link>
                <Link to='/about'> <li> About </li> </Link>
                <Link to='/contact'> <li> Contact Us </li> </Link>

            </ul>
        </div>
    )
}

export default Navbar;