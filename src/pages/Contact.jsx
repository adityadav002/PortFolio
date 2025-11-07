import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import '../styles/Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_q8u1zik",
      "template_2qzi8ti",
      form.current,
      "XVyjK3xHoFj5Ex5nB"
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result);
        alert("✅ Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS send error:", error);
        alert("❌ Failed to send message. Check console.");
      }
    );
};


  return (
    <>
    <hr />
    <div className="contact-content">
      <div className="text">
        <h1>Contact Me</h1>
        <br />
        <h3>aditya.yadav992636@gmail.com</h3>
        <p>Feel free to contact me with any inquiries or questions</p>
      </div>
      <br />
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" className="input name" required />
        <input type="email" name="email" placeholder="Email Address" className="input" required />
        <br />
        <br />
        <br />
        <textarea name="message" className="message" placeholder="Message" required></textarea>
        <br />
        <br />
        <button className="contact_btn" type="submit">Submit</button>
      </form>
      <br />
      <div className="logo">
        <ul>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaGithub /></a></li>
          <li><a href="#"><FaLinkedinIn /></a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Contact;
