import "../styles/Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
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
        <form action="submit">
          <input type="text" placeholder="Name" className="name input"/>
          <input type="text" placeholder="Email Address" className="input"/>
          <br />
          <br />
          <br />
          <textarea name="message" id="message" className="message" placeholder="Message"></textarea>
          <br />
          <br />
          <button className="contact_btn">Submit</button>
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
}

export default Contact;

// https://reactbits.dev/text-animations/falling-text
