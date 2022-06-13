import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>Chitti1890@gmail.com</span>
            <div className="f-icons">
              <a href='https://www.instagram.com/chittipriya23/'>
              <div className="instagram-social">
                <Insta color='white' size='3rem'/>
                </div>
                </a>
                <a href='https://www.facebook.com/chittipriya.verma/'>
                  <div className="facebook-social">
                <Facebook color='white' size='3rem'/>
                </div>
                </a>
                <a href='https://github.com/chitti12'>
                  <div className="github-social">
                <Github color='white' size='3rem'/>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
