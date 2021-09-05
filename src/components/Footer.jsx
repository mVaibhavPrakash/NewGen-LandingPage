import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import '../css/Footer.css'

const Footer = () => {
    return (

    <footer id='footer'>
        <div id='footer-social'>
            <FontAwesomeIcon className='footer-icon' icon={faGithub}/>
            <FontAwesomeIcon className='footer-icon' icon={faFacebook}/>
            <FontAwesomeIcon className='footer-icon' icon={faTwitter}/>
            <FontAwesomeIcon className='footer-icon instagram' icon={faInstagram}/>
            <FontAwesomeIcon className='footer-icon youtube' icon={faYoutube}/>
            <FontAwesomeIcon className='footer-icon google' icon={faGoogle}/>
        </div>
        <div className="footer-links">
            <a href="">Sitemap</a>
            <a href="">About</a>
            <a href="">Privacy</a>
            <a href="">Blogs</a>
            <a href="">Terms of Use</a>
            <a href="">Jobs</a>
        </div>
        <div id="footer-subs">
            <p>Subscribe to our newsletter</p>
            <input placeholder="Enter you email"/>
        </div>
    </footer>


        /*
        <footer className='footer'>
            <div id="footerLogo">Company</div>
            <div className='footerMainBody'>
                <div className='footerMainBodyContent footerProducts'>
                    <p id='footerProductsHeading'>Products</p>
                    <a className='footerProdutsLink'>Blogs</a>
                    <a className='footerProdutsLink'>Quizes</a>
                    <a className='footerProdutsLink'>Editor</a>
                    <a className='footerProdutsLink'>Muzz</a>
                </div>
                <div className='footerMainBodyContent footerInfo'>
                    <p id='footerInfoHeading'>Info</p>
                    <a className='footerInfoLink'>About</a>
                    <a className='footerInfoLink'>History</a>
                    <a className='footerInfoLink'>Home</a>
                    <a className='footerInfoLink'>Carrer</a>
                </div>
                <div className='footerMainBodyContent footerPrivacy'>
                    <p id='footerPrivacyHeading'>Privacy</p>
                    <a className='footerPrivacyLink'>Privacy Policy</a>
                    <a className='footerPrivacyLink'>Terms and Conditions</a>
                    <a className='footerPrivacyLink'>Editor</a>
                </div>
                <div className='footerMainBodyContent footerContact'>
                    <p id='footerContactHeading'>Contact</p>
                    <a className='footerContactLink'>Blogs</a>
                    <a className='footerContactLink'>Quizes</a>
                    <a className='footerContactLink'>Editor</a>
                    <a className='footerContactLink'>Muzz</a>
                </div>
            </div>
        </footer>
        */
    )
}

export default Footer
