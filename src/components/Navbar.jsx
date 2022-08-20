import { useEffect, useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import img from '../../../../../public/img/newgen.png'
import '../css/Navbar.css'
import click from '../js/click'
import {setLoggedIn} from '../../../../redux/slices/authSlice'
import { setUser } from '../../../../redux/slices/authSlice'
import { setProfileCreated } from '../../../../redux/slices/authSlice'
import { useRef } from 'react'

const logout = (e,dispatch,navigate) =>{
    e.preventDefault()
    dispatch(setLoggedIn({
        isLoggedIn:false
    }))
    navigate('/')
}


const Navbar = () => {
    const [toggle,setToggle] = useState('');
    const User = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dropbtnref = useRef(null);

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('userData'))
        console.log(User.isProfileCreated,User.isLoggedIn)
        if(User?.username==='' && userData){
            console.log('hdd')
            dispatch(setUser({uid_person:userData.id,username:userData.username,fullname:userData.fullname}))
            dispatch(setLoggedIn({
                isLoggedIn:true
            }))
            console.log(User.isLoggedIn+'jdjhw')
        }
        if(userData?.isProfileCreated){
            dispatch(setProfileCreated({
                isProfileCreated:userData.isProfileCreated
            }))
            dropbtnref.current.addEventListener('click',()=>{
                navigate('/blog/new')
            })
        }
    },[])

    console.log(User)

    return (
        <nav className='lpage-nav'>
            <div className="lpage-logo lpage-navbarLeft">
                <img id="lpage-navbarCompanyLogo" src={img} alt='img'/>
            </div>
            <Link to={'/'} className='lpage-a' id="lpage-home" >Home</Link>
            <div className={`lpage-navbarRight${toggle}`}>
                { 
                    !User.isLoggedIn ? <Link to={'/auth/signup'} className='lpage-a' id="lpage-about">Signup</Link>:''
                }
                {
                    User.isProfileCreated ?
                    <div className="dropdown" >
                            <span className="dropbtn" id='btn-blog' ref={dropbtnref}>Blogs</span>
                            <div className="dropdown-content" id='drp-blog' >
                                <Link to={'/blog/new'} >Create New</Link>
                                <Link to={'/blog/bulkupload'}>Bulk Upload</Link>
                            </div>
                    </div> : ''
                }
                {   
                    !User.isLoggedIn ? <Link to={'/auth/login'} className='lpage-a' id="lpage-login">Login</Link> : ''
                }
                {
                    User.isLoggedIn ?
                        <div className="dropdown" id='dropdown-btn' >
                            <span className="dropbtn" id='lpage-profile'>VP</span>
                            <div className="dropdown-content">
                                <Link to={'/username'} className='lpage-a'>Profile</Link>
                                <Link to={'/dashboard'} className='lpage-a' >Dashboard</Link>
                                <Link to={'/'} className='lpage-a' onClick={e => logout(e,dispatch,navigate)}>Logout</Link>
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
