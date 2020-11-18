import React from 'react';
import './style.css';
import profile from "./profile.jpg"


function Home() {
    return (
        <main className="background-page">
            <div className="columns">
                <div className="column left-col">
                    <h1 className="intro">Hey, I'm David</h1>
                    <p className="intro-des">Frontend Javascript Developer looking to make an impact collaborating with talented developers.</p>
                    <button className="view-button">View Portfolio</button>
                </div>
                <div className="column right-col">
                    <img className="profile-pic" src={profile} />
                </div>
            </div>
        </main>
    );
}

export default Home;
