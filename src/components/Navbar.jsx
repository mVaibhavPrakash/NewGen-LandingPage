import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import click from '../js/click.js'

const Navbar = () => {
    const [toggle,setToggle] = useState('');
    return (
        <nav className='nav'>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className={`navbarRight${toggle}`}>
                <Link to={'auth'} id="about">Auth</Link>
                <Link to={'auth'}id="blogs">Blogs</Link>
                <Link to={'auth'}id="login">Login</Link>
                <Link to={'auth'}id="logout">Logout</Link>
            </div>
            <div className="navbarButton" onClick={e=>{click(e,toggle,setToggle)}}>
                <span id='span1'></span>
                <span id='span2'></span>
                <span id='span3'></span>
            </div>
        </nav>
    )
}

export default Navbar;
