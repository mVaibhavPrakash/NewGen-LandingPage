import { useState} from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import img from '../../../../../public/img/newgen.png'
import '../css/Navbar.css'
import click from '../js/click'
import {setLoggedIn} from '../../../../redux/slices/authSlice'

const logout = (e,dispatch,navigate) =>{
    e.preventDefault()
    dispatch(setLoggedIn())
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('firstname')
    navigate('/')
}

const Navbar = () => {
    const [toggle,setToggle] = useState('');
    const User = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav className='lpage-nav'>
            <div className="lpage-logo lpage-navbarLeft">
                <img id="lpage-navbarCompanyLogo" src={img} alt='img'/>
            </div>
            <a className='lpage-a' id="lpage-home">Home</a>
            <div className={`lpage-navbarRight${toggle}`}>
                {   
                    !User.isLoggedIn ? <Link to={'auth/signup'} className='lpage-a' id="lpage-about">Signup</Link>:''
                }
                {
                    User.profileCreated ?<Link to={'blog/new'} className='lpage-a' id="lpage-blogs">Blogs</Link>:''
                }
                {   
                    !User.isLoggedIn ? <Link to={'auth/login'} className='lpage-a' id="lpage-login">Login</Link> : ''
                }
                {
                    User.isLoggedIn ?
                        <div className="dropdown">
                            <span className="dropbtn">{User.firstname}</span>
                            <div className="dropdown-content">
                                <Link to={'/username'}>Profile</Link>
                                <Link to={'/dashboard'} >Dashboard</Link>
                                <Link to={'/'} onClick={e => logout(e,dispatch,navigate)}>Logout</Link>
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
