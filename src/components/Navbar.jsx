import { useEffect, useState} from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import img from '../../../../../public/img/newgen.png'
import '../css/Navbar.css'
import click from '../js/click'
import {setLoggedIn} from '../../../../redux/slices/authSlice'
import { setUser } from '../../../../redux/slices/authSlice'

const logout = (e,dispatch,navigate) =>{
    e.preventDefault()
    dispatch(setLoggedIn())
    navigate('/')
}

const Navbar = () => {

    const [toggle,setToggle] = useState('');
    const User = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(User.username==='' && userData){
            dispatch(setUser({username:userData.username,firstname:userData.firstname}))
            dispatch(setLoggedIn())
        }
    },[])
    return (
        <nav className='lpage-nav'>
            <div className="lpage-logo lpage-navbarLeft">
                <img id="lpage-navbarCompanyLogo" src={img} alt='img'/>
            </div>
            <a className='lpage-a' id="lpage-home">Home</a>
            <div className={`lpage-navbarRight${toggle}`}>
                {   
                    /*!User.isLoggedIn ? */<Link to={'/auth/signup'} className='lpage-a' id="lpage-about">Signup</Link>/*:''*/
                }
                {
                    /*User.profileCreated ?*/
                    <div className="dropdown" >
                            <span className="dropbtn" id='btn-blog'>Blogs</span>
                            <div className="dropdown-content" id='drp-blog'>
                                <Link to={'/blog/new'}>Create New</Link>
                                <Link to={'/dashboard'} >Bulk Upload</Link>
                            </div>
                    </div> /*: ''*/
                }
                {   
                    /*!User.isLoggedIn ? */<Link to={'/auth/login'} className='lpage-a' id="lpage-login">Login</Link> /*: ''*/
                }
                {
                   /* User.isLoggedIn ?*/
                        <div className="dropdown" id='dropdown-btn' >
                            <span className="dropbtn" id='lpage-profile'>VP</span>
                            <div className="dropdown-content">
                                <Link to={'/username'} className='lpage-a'>Profile</Link>
                                <Link to={'/dashboard'} className='lpage-a' >Dashboard</Link>
                                <Link to={'/'} className='lpage-a' onClick={e => logout(e,dispatch,navigate)}>Logout</Link>
                            </div>
                        </div> /*: ''*/
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
