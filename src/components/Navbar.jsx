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
                    Object.keys(User).length === 0 ? <Link to={'auth/signup'} className='lpage-a' id="lpage-about">Signup</Link>:''
                }
                {
                    Object.keys(User).length !== 0 ?<Link to={'blog/new'} className='lpage-a' id="lpage-blogs">Blogs</Link>:''
                }
                {   
                    Object.keys(User).length === 0 ? <Link to={'auth/login'} className='lpage-a' id="lpage-login">Login</Link> : ''
                }
                {
                    Object.keys(User).length !== 0 ?
                        <div className="dropdown">
                            <span className="dropbtn">{User.firstname}</span>
                            <div className="dropdown-content">
                                <Link to={'/username'}>Profile</Link>
                                <Link to={'/dashboard'} >Dashboard</Link>
                                <Link to={'/logout'} onClick={e =>setUser('')}>Logout</Link>
                            </div>
                        </div> : ''
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
