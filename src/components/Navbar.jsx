import {useContext, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import img from '../../../../../public/img/newgen.png'
import '../css/Navbar.css'
import click from '../js/click'
import { AuthContext } from '../../../../hooks/AuthContext'


const Navbar = () => {
    const [toggle,setToggle] = useState('');
    const [User,setUser] = useContext(AuthContext);
    return (
        <nav className='lpage-nav'>
            <div className="lpage-logo lpage-navbarLeft">
                <img id="lpage-navbarCompanyLogo" src={img} alt='img'/>
            </div>
            <a className='lpage-a' id="lpage-home">Home</a>
            <div className={`lpage-navbarRight${toggle}`}>
                {   
                    !User ? <Link to={'auth/signup'} className='lpage-a' id="lpage-about">Signup</Link>:''
                }
                {
                    User?<Link to={'blog/new'} className='lpage-a' id="lpage-blogs">Blogs</Link>:''
                }
                {   
                    !User ? <Link to={'auth/login'} className='lpage-a' id="lpage-login">Login</Link> : ''
                }
                {
                    User?<Link to={'/profile:user.id'} className='lpage-a' id="lpage-logout" >{User}</Link>:''
                }
                {
                    User?<Link to={'/'} className='lpage-a' id="lpage-logout" onClick={e =>setUser('')}>Logout</Link>:''
                }
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
