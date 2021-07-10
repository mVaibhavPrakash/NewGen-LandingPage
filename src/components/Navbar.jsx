import React, {useState} from 'react'
import '../css/Navbar.css'
import click from '../js/click.js'

const Navbar = () => {
    const [toggle,setToggle] = useState('');
    return (
        <nav>
            <div className='navbarLeft'>
                <div id="navbarCompanyLogo">Company</div>
                <div id="home">Home</div>
            </div>
            <div className="navbarRight">
                <div id="about">About</div>
                <div id="blogs">Blogs</div>
                <div id="login">Login</div>
                <div id="logout">Logout</div>
            </div>
            <div className={`navbarButton${toggle}`} onClick={e=>{click(e,toggle,setToggle)}}>
                <span id='span1'></span>
                <span id='span2'></span>
                <span id='span3'></span>
            </div>
        </nav>
    )
}

export default Navbar;
