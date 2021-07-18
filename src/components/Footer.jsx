import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
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
    )
}

export default Footer
