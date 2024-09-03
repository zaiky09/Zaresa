import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
                We would love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out.
            </p>

            <p className="contact-description-2">
                Call us: <a href="tel:+254721322780" className="contact-phone"><br></br><strong>0721 322 780 / 0710441420</strong></a>
            </p>

            <form action="/submit-form" method="POST" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Your Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Your Email" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
