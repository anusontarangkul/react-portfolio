import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer">
            <div className="columns">
                <div className="column footer-column">
                    <p className="footer-details">Looking to hire a software developer?</p>
                    <button className="footer-button">Contact Me</button>
                </div>
                <div className=" column footer-column  has-text-weight-medium">
                    <ul className="menu simple footer-icon">
                        <li><a href="https://twitter.com/?lang=en"><i className="fa fa-envelope" aria-hidden="true"></i></a>&nbsp;anusontarangkul.d@gmail.com</li>

                        <li className="icon2"><a href="https://www.facebook.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>&nbsp;on LinkedIn</li>

                    </ul>
                </div>
                <div className=" column footer-column  has-text-weight-medium">
                    <ul className="menu simple footer-icon">
                        <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-github" aria-hidden="true"></i></a>&nbsp;on GitHub</li>

                        <li className="icon2"><a href="https://www.pinterest.com/"><i className="fa fa-youtube" aria-hidden="true"></i></a>&nbsp;on YouTube</li>

                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Footer;
