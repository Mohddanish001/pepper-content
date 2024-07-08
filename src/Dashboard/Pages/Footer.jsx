import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer'>
    <div className='footer-cards'>
    <div className="foot-card">
    <h3>PRODUCT </h3>
    <ul>
        <li>Content Marketing Platform</li>
        <li>Gen AI for enterprises</li>
        <li>Organic Marketing Stack</li>
        <li>Expert Talent</li>
        <li>Content OS</li>
    </ul>
    </div>
    <div className='foot-card-1'>
        <h3>FEATURES</h3>
        <ul>
            <li>Peppertype AI</li>
        <li>Content Idea lab</li>
            <li>Content Editor</li>
            <li>Content Audit</li>
            <li>Content RoI and Analytics</li>
            <li>Content Grader</li>
        </ul>
    </div>
    <div className='foot-card-2'>
        <h3>SERVICES</h3>
        <ul>
            <li>Blog Writing Services</li>
            <li>Video Production</li>
            <li>Localization</li>
            <li>Whitepapers</li>
            <li>Thought Leadership</li>
            <li>Subtitling</li>
            <li>Voice Over</li>
        </ul>
    </div>
    <div className='foot-card-3'>
        <h3>RESOURCES</h3>
        <ul>
            <li>Blog</li>
            <li>Global Marketing Leaders</li>
            <li>Samples</li>
            <li>TOFU - CMO Series</li>
            <li>Events</li>
        </ul>
    </div>
    <div className='foot-card-4'>
        <h3>COMPARISON</h3>
        <ul>
            <li>vs Clearscope</li>
            <li>vs Conductor</li>
            <li>vs Jasper</li>
            <li>vs Marketmuse</li>
            <li>vs Optimizely</li>
            <li>vs Semrush</li>
            <li>vs Surferseo</li>
            <li>vs Writer</li>
        </ul>
    </div>
    <div className='foot-card-5'>
        <h3>ABOUT PEPPER CONTENT</h3>
        <ul>
            <li>Customers</li>
            <li>Culture & Careers</li>
        </ul>
    </div>
    </div>
   <hr></hr>
   <div className='down-main'>
    <div className='down-footer'>
        <h3>COMPANY</h3>
        <ul>
            <li>ABout</li>
            <li>Careers – We're hiring!</li>
            <span className='li-icon'>Join as a creator  </span>
        </ul>
    </div>
    <div className='down-footer-1'>
    <h3>ADDRESS</h3>
    <ul>
        <li className='footer-adress'>AF-14 Fourbrick Technology opc pvt ltd sec 16 Noida</li>
    </ul>
    </div>
    <div className='down-footer-2'>
    <h3>CONTACT</h3>
    <ul>
        <li>For Any Query</li>
        <li>Please Contact With us at</li>
        <span>admin@gmail.com</span>
    </ul>
    </div>
    <div className='down-mains'>
    <h3>SOCIAL</h3>
    <div className="social">
    <BsInstagram />
    <FaLinkedin />
    <FaXTwitter />
    <FaFacebook />
    </div>
    </div>
     </div>
     <hr></hr>
     <div className='page-foot'>
        <span>© 2024, Fourbrick Technology pvt ltd. All Rights Reserved.</span>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
     </div>
     </div>
  )
}

export default Footer