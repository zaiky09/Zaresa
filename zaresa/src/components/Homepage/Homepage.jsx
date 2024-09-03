// import React from "react";
// import './Homepage.css'

// function Homepage() {
//     return (
//         <div className="homepage-container">
//             <h1>ZARESA LIMITED</h1>
//             <p className="slogan">Safe, Reliable & Affordable</p>
//             {/* <p className="quote">"Safe Journeys, Bright Futures!"</p> */}
//             <div className="homepage-btns">
//                 <button className='btns' buttonStyle='btn--outline'
//                 buttonSize='btn--large'>
//                     Learn More
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Homepage;

import React from "react";
import './Homepage.css';
import About from "../About/About";
import Contact from "../Contact/Contact";

function Homepage() {
    return (
        <div className="homepage-container">
            <h1>ZARESA LIMITED</h1>
            <p className="slogan">Safe, Reliable & Affordable</p>

            {/* Add an ID to the About section */}
            <div id="about" className="about-section">
                {/* <h2>About Us</h2>
                <p>Here is some information about us...</p> */}
            </div>

            {/* Add an ID to the Contact section */}
            <div id="contact" className="contact-section">
                {/* <h2>Contact Us</h2>
                <p>Here is how you can contact us...</p> */}
            </div>

            {/* Learn More button now points to the About section */}
            <div className="homepage-btns">
                <a href="#about">
                    <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Learn More
                    </button>
                </a>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    );
}

export default Homepage;
