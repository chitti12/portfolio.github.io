import React, {useContext} from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Me from '../../img/me.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const transition = {duration : 2, type: 'spring'}

export const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" style={{color: darkMode? 'var(--orange)':''}}>
        <div className="i-left">
        <div className="i-name">
            <span>Hi, I AM</span>
            <span>Chittipriya</span>
            <span>Frontend Developer 
            with no level of 
            work experience and 
            development, show the Quality</span>
        </div>
        
        <button className="button 
        i-button">Hire Me!</button>
        <div className="i-icons">
            <a href='https://github.com/chitti12'>
              <div className="github-social">
            <img src={Github} alt="" />
            </div>
            </a>
            <a href='https://www.linkedin.com/in/chittipriya-verma-985069199/'>
              <div className="linkedin-social">
            <img src={Linkedin} alt="" />
            </div>
            </a>
            <a href='https://www.instagram.com/chittipriya23/'>
              <div className="instagram-social"> 
            <img src={Instagram} alt="" />
            </div>
            </a>
        </div>

        </div>
        <div className="i-right" style={{color: darkMode? 'var(--orange)':''}}>
            
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Me} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView= {{left: '-24%'}}
            transition={transition}
            src={Glassesimoji} alt="" />
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}

            style={{top: '-4%', left: '68%'}}
            className="floating-div"
            >
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}

            style={{top: '18rem', left: '0rem'}}
            className="floating-div"
            >
              <FloatingDiv image={Thumbup} txt1='Quality' txt2='Design'/>
            </motion.div>
      {/* blur divs */}
        <div className="blur" style={{background: 
          "rgba(238 210 255)"}}></div>
        <div className="blur" 
        style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}>

        </div>
      </div>
    </div>
  ) 
}
