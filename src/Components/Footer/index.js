import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer">
            <div className="columns">
                <div className="column footer-column">
                    <p className="footer-details has-text-white-bis">Looking to hire a software developer?</p>
                    <button className="footer-button">Contact Me</button>
                </div>
                <div className=" column footer-column  has-text-weight-medium ">
                    <ul className="menu simple footer-icon">
                        <li><a target="_blank" className="has-text-white-bis" href="mailto:anusontarangkul.d@gmail.com"><i className="has-text-white-bis fa fa-envelope" aria-hidden="true"></i>&nbsp;anusontarangkul.d@gmail.com</a></li>

                        <li className="icon2"><a className="has-text-white-bis" target="_blank" href="https://www.linkedin.com/in/anusontarangkul/"><i className="has-text-white-bis fa fa-linkedin" aria-hidden="true"></i>&nbsp;on LinkedIn</a></li>

                    </ul>
                </div>
                <div className=" column footer-column  has-text-weight-medium">
                    <ul className="menu simple footer-icon">
                        <li><a target="_blank" className="has-text-white-bis" href="https://github.com/anusontarangkul"><i className="has-text-white-bis fa fa-github" aria-hidden="true"></i>&nbsp;on GitHub</a></li>

                        <li className="icon2 has-text-white-bis"><a className="has-text-white-bis" target="_blank" href="https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw?view_as=subscriber"><i className="has-text-white-bis fa fa-youtube" aria-hidden="true"></i>&nbsp;on YouTube</a></li>

                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Footer;
