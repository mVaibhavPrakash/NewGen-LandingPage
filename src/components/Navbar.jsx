import React, {useState} from 'react'
import '../css/Navbar.css'
import click from '../js/click.js'

const Navbar = () => {
    const [toggle,setToggle] = useState('');
    return (
        <nav>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className={`navbarRight${toggle}`}>
                <a id="about">About</a>
                <a id="blogs">Blogs</a>
                <a id="login">Login</a>
                <a id="logout">Logout</a>
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
