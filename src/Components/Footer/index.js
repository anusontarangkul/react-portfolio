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
                        <li><a target="_blank" href="mailto:anusontarangkul.d@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;anusontarangkul.d@gmail.com</a></li>

                        <li className="icon2"><a target="_blank" href="https://www.linkedin.com/in/anusontarangkul/"><i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;on LinkedIn</a></li>

                    </ul>
                </div>
                <div className=" column footer-column  has-text-weight-medium">
                    <ul className="menu simple footer-icon">
                        <li><a target="_blank" href="https://github.com/anusontarangkul"><i className="fa fa-github" aria-hidden="true"></i>&nbsp;on GitHub</a></li>

                        <li className="icon2"><a target="_blank" href="https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw?view_as=subscriber"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;on YouTube</a></li>

                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Footer;
