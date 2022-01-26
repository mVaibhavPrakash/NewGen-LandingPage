import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import click from '../js/click.js'

const Navbar = () => {
    const [toggle,setToggle] = useState('');
    return (
        <nav className='lpage-nav'>
            <div className='lpage-navbarLeft'>
                <a id="lpage-navbarCompanyLogo">Company</a>
                <a className='lpage-a' id="lpage-home">Home</a>
            </div>
            <div className={`lpage-navbarRight${toggle}`}>
                <Link to={'blog/new'} className='lpage-a' id="lpage-about">Auth</Link>
                <Link to={'blog/new'} className='lpage-a' id="lpage-blogs">Blogs</Link>
                <Link to={'auth/login'} className='lpage-a' id="lpage-login">Login</Link>
                <Link to={'auth'} className='lpage-a' id="lpage-logout">Logout</Link>
            </div>
            <div className="lpage-navbarButton" onClick={e=>{click(e,toggle,setToggle)}}>
                <span id='lpage-span1'></span>
                <span id='lpage-span2'></span>
                <span id='lpage-span3'></span>
            </div>
        </nav>
    )
}

export default Navbar;
