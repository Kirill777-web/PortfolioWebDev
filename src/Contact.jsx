import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address');
    }
    setEmail(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email) {
      alert('Details submitted successfully');
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div>
      <section className='section contact'>
        <div className='section-title'>
          <h2>Contact Me</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center contact-center'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Your Name'
                className='form-control'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={validateEmail}
                placeholder='Enter Your Email'
                className='form-control'
                required
              />
              {emailError && <div className='error'>{emailError}</div>}
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                placeholder='Your Message'
                className='form-control'
              ></textarea>
            </div>
            <button type='submit' className='btn'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
