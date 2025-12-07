import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/Contact.css";
import { toast } from "react-toastify";

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
          toast.success("Thanks for reaching out! I'll respond shortly.", {
            style: {
              background: "#1e1e1e",
              color: "#e6e6e6",
              border: "1px solid #2e2e2e",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              fontSize: "15px",
              padding: "14px 18px",
            },
            icon: false,
          });
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS send error:", error);
          toast.error("Oops! Something went wrong. Please try again.");
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
          <p>
            Let’s build something great together! I’m always open to
            collaborations, feedback, opportunities, and interesting
            discussions—feel free to reach out anytime.
          </p>
        </div>
        <br />
        <br />
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            required
          />
          <br />
          <br />
          <br />
          <textarea
            name="message"
            className="message"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <br />
          <button className="contact_btn" type="submit">
            Submit
          </button>
        </form>
        <br />
        <div className="logo">
          <ul>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
