// NavBar.js
import React from 'react';
import './styles/nav-bar.css';
import Footer from './Footer';

const Contact = () => {
    return (
        <div> 
            <div className='page'>
            <div className= "big-header"> Contact Me! </div>
            <div className= "contact-body"> Feel free to reach out if you have any questions, collaboration ideas, or just want to connect. I'm always open to new opportunities and discussions! Here are the best ways to get in touch: </div>
            <div className= "contact-info"> Email: gili3cohen@gmail.com </div>
            <div className= "contact-info"> LinkedIn: gili-cohen3 </div>
            <div className='big-section'/>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;