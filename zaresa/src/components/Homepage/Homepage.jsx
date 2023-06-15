import React from "react";
import './Homepage.css'

function Homepage() {
    return (
        <div className="homepage-container">
            <h1>ZARESA LIMITED</h1>
            <p>"Safe Journeys, Bright Futures!"</p>
            <div className="homepage-btns">
                <button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Homepage;