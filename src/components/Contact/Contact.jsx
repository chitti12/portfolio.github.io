import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const[done, setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dax14ie', 'template_whiwm9m', form.current, 'Fx3d7Ix0xYdkYj0j4')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    };
    return (
   <div className="contact" style={{color: darkMode? 'var(--orange)':''}}>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white':''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
                </div>
            </div>
        </div>


<div className="c-right" style={{color: darkMode? 'var(--orange)':''}}>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="user" placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" id="" className="user" placeholder="Message"/>
        <input type="submit" value="Send" className="button"/>
        <span style={{color: darkMode? 'white':''}}>{done && "You got the message in your mail"}</span>
        <div className="blur c-blur1"
        style={{background: "var(--purple)"}}
        >
        </div>
    </form>
</div>



   </div>
  )
}

export default Contact