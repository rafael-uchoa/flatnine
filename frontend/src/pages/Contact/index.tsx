import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const history = useHistory();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === undefined || name!.length <= 1) {
      alert('Please enter a valid name');
      return;
    }

    if (email === undefined || email!.length <= 5) {
      alert('Please enter a valid email');
      return;
    }

    if (message === undefined || message!.length <= 10) {
      alert('Please enter a valid message');
      return;
    }

    alert('Message sent successfully!');
    history.push('/');
  }

  return (
    <div className="Contact">
      <Topbar />
      <Navbar />
      <section>
        <h1>Contact Us</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
