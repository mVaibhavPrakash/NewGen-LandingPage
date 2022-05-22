import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import '../css/Footer.css'

const Footer = ({footerRef}) => {

  useEffect(() =>{
    return () => {
      if(footerRef !== null && footerRef.current)
        footerRef.current.style.width='100vw'
      }
  })
    return (

    <div className='lpage-footer' ref={footerRef}>
        <div id='lpage-footer-social'>
            <FontAwesomeIcon className='lpage-footer-icon' icon={faGithub}/>
            <FontAwesomeIcon className='lpage-footer-icon' icon={faFacebook}/>
            <FontAwesomeIcon className='lpage-footer-icon' icon={faTwitter}/>
            <FontAwesomeIcon className='lpage-footer-icon lpage-instagram' icon={faInstagram}/>
            <FontAwesomeIcon className='lpage-footer-icon lpage-youtube' icon={faYoutube}/>
            <FontAwesomeIcon className='lpage-footer-icon lpage-google' icon={faGoogle}/>
        </div>
        <div className="lpage-footer-links">
            <a href="">Sitemap</a>
            <a href="">About</a>
            <a href="">Privacy</a>
            <a href="">Blogs</a>
            <a href="">Terms of Use</a>
            <a href="">Jobs</a>
        </div>
        <div id="lpage-footer-subs">
            <p>Subscribe to our newsletter</p>
            <input placeholder="Enter you email"/>
        </div>
    </div>
    )
}

export default Footer
