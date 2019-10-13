import React from 'react'
import { FaViber } from "react-icons/fa";
import {IoMdMail} from 'react-icons/io';
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

function Contact() {
    return (
        <div className='mainContact'>
            <div className="viberMail">
                <a href="viber://contact?number=%2B38163396453">Contact us via Viber: 063/396455 <FaViber style={{color: 'white'}}/></a>
                <a href = "mailto: abc@example.com">Send us a Email <IoMdMail style={{color: 'white'}}/></a>
            </div>
            <div className="social">
                <h2>Check out our social media :)</h2>
                <div className="media">
                <a href="http://www.instagram.com"><FaInstagram/></a>
                <a href="http://www.facebook.com"><FaFacebook /></a>
                <a href="http://www.twitter.com"><FaTwitter /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
