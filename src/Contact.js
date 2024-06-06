import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>
            <nav>
                <Link to="/" className="back-to-home">
                    <img src={require('./Designer.jpeg')} alt="Back to Home" />
                </Link>
            </nav>
            {submitted ? (
                <div className="contact-container">
                    <h1>Thank You!</h1>
                    <p>Your message has been sent successfully.</p>
                    <Link to="/" className="back-to-home">Go back to Home</Link>
                </div>
            ) : (
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p>If you have any questions or need further information, please reach out to us!</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="example@example.com" />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required placeholder="Please write your message here."></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </main>
    );
}

export default Contact;
