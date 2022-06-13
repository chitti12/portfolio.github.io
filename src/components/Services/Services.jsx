import React, {useContext} from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const transition = {duration : 2, type: 'spring'}

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome" style={{color: darkMode? 'var(--orange)':''}}>
        <span style={{color: darkMode? 'white':''}}>My Dedicate</span>
        <span>Services</span>
        <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro expedita vero consectetur 
            <br />
            inventore dolore, magni sit. Officiis natus nihil, blanditiis explicabo laborum quo nisi incidunt labore maxime architecto. Molestiae.
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
        
        <motion.div 
        initial={{left: '25rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        style={{left: '14rem'}}>
            <Card
            emoji = {Heartemoji}
            heading = {'Design'}
            detail = {"Figma, Photoshop, Canva, Picsart, Alight Motion, XD"}
            />
        </motion.div>
            { /* second card */ }
        <motion.div 
        initial={{left: '-11rem', top: '12rem'}}
        whileInView={{left: '-4rem'}}
        transition={transition}
        style={{top: "12rem", left: "-4rem"}}>
            <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React, Next, Bootstrap, JQuery"}
            />
        </motion.div>
            { /* 3rd */ }
        <motion.div 
        initial={{top: '19rem', left: '25rem'}}
        whileInView={{left: '12rem'}}
        transition={transition}
        style={{top: "19rem", left: "12rem"}}>
            <Card 
            emoji={Humble}
            heading={"UI/UX"}
            detail={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro expedita vero consectetur"
            }
            />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>

    </div>
 )
}

export default Services