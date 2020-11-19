import React from 'react';
import './style.css';
import ConnectedPolitics from "./connected-politics.gif"
import EmploymentBuddy from "./employment-buddy.gif"

function Portfolio() {
    return (
        <div className="background-page">
            <h2 className="projects-h2">Projects</h2>
            <div className="columns project-column">
                <div className="column  column-margin is-one-third">
                    <h2 className="project-title has-text-weight-bold">
                        Employment Buddy
        </h2>
                    <p>
                        <a href="https://employmentbuddy.herokuapp.com/" target="_blank">
                            Deployment</a
                        >
                        &nbsp;&&nbsp;
                        <a
                            href="https://github.com/anusontarangkul/employment-buddy"
                            target="_blank"
                        >
                            GitHub Repository</a
                        >
                    </p>
                    <br />
                    <p>
                        This app helps you stay organize on your job search.
        </p>
                    <br />
                    <h3 className="has-text-weight-bold tech-border">
                        Technologies
        </h3>
                    <div className="columns tech-columns">
                        <div className="column has-text-left">
                            <p>&#9679;&nbsp;HTML</p>
                            <p>&#9679;&nbsp;CSS</p>
                            <p>&#9679;&nbsp;Javascript</p>
                            <p>&#9679;&nbsp;Bulma</p>
                            <p>&#9679;&nbsp;jquery</p>
                            <p>&#9679;&nbsp;Undraw</p>
                        </div>
                        <div className="column has-text-left">
                            <p>&#9679;&nbsp;Cryptjs</p>
                            <p>&#9679;&nbsp;Dragula.js</p>
                            <p>&#9679;&nbsp;Express</p>
                            <p>&#9679;&nbsp;MYSQL</p>
                            <p>&#9679;&nbsp;Passport</p>
                            <p>&#9679;&nbsp;Sequelize</p>
                        </div>
                    </div>
                </div >
                <div className="column is-two-thirds">
                    <img className="project-image" src={EmploymentBuddy} />
                </div>
            </div >
            <div className="columns project-column">
                <div className="column column-margin is-one-third project-2">
                    <h2 className="project-title has-text-weight-bold">
                        Connected Politics
        </h2>
                    <p>
                        <a
                            href="https://anusontarangkul.github.io/connected-politics/"
                            target="_blank"
                        >
                            Deployment
                        </a>
                        &nbsp;&&nbsp;
                        <a
                            href="https://github.com/anusontarangkul/connected-politics"
                            target="_blank"
                        >
                            GitHub Repository</a
                        >
                    </p >
                    <br />
                    <p>
                        This app helps you stay informed and engaged in politics.
        </p>
                    <br />
                    <h3 className="has-text-weight-bold  tech-border">
                        Technologies
        </h3>
                    <div className="columns tech-columns">
                        <div className="column has-text-left ">
                            <p>&#9679;&nbsp;HTML</p>
                            <p>&#9679;&nbsp;CSS</p>
                            <p>&#9679;&nbsp;Javascript</p>
                            <p>&#9679;&nbsp;Google Civil Information API</p>
                            <p>&#9679;&nbsp;ProPublica API</p>
                        </div>
                        <div className="column has-text-left">
                            <p>&#9679;&nbsp;Typed.js</p>
                            <p>&#9679;&nbsp;Bulma</p>
                            <p>&#9679;&nbsp;jQuery</p>
                            <p>&#9679;&nbsp;Twitter Developer Tools</p>
                            <p>&#9679;&nbsp;Baloon CSS</p>
                        </div>
                    </div>
                </div >
                <div className="column is-two-thirds project-2">
                    <img className="project-image" src={ConnectedPolitics} />
                </div>
            </div >
        </div >

    );
}

export default Portfolio;
