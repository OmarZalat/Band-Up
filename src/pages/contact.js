import telephone from "../../public/telephone.png";
import mail from "../../public/mail.png";
import location from "../../public/location.png";
import NavigationBar from "../../src/components/UI/navigationBar";
import Footer from "../../src/components/UI/footer";
import { useRef } from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function Contact() {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredEmail = emailInput.current.value;
    if (!validateEmail(enteredEmail)) {
      alert("Please enter a valid email address");
      return;
    }
    const enteredMessage = messageInput.current.value;
    if (!enteredMessage) {
      alert("Enter a message");
      return;
    }

    const formData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      message: enteredMessage,
    };

    console.log(formData);
  }

  return (
    <form onSubmit={submitHandler}>
      <NavigationBar></NavigationBar>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div id="title-contact-page">
        <h1>Contact Us</h1>
        <br />
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <div id="main-card-container">
        <div id="main-card">
          <div id="card-left">
            <div id="description-1">
              <h2>Contact Information</h2>
              <p>
                Fill up the form and out Team will get back to you within 24
                hours.
              </p>
            </div>
            <div id="description-2">
              <div className="description-2-wrapper">
                <div className="description-2-icon">
                  <BsTelephone size={35} />
                </div>
                <div className="description-2-text">
                  <p>+961 01 218 717</p>
                </div>
              </div>
              <div className="description-2-wrapper">
                <div className="description-2-icon">
                  <AiOutlineMail size={35}></AiOutlineMail>
                </div>
                <div className="description-2-text">
                  <p>info@aust.edu.lb</p>
                </div>
              </div>
              <div className="description-2-wrapper">
                <div className="description-2-icon">
                  <GoLocation size={35} />
                </div>
                <div className="description-2-text">
                  <p>Ashrafieh, Alfred Naccache Avenue, Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <div id="description-3">
              <div id="socials-div">
                <a href="#" className="fa fa-facebook fa-1x"></a>
                <a href="#" className="fa fa-twitter fa-1x"></a>
                <a href="#" className="fa fa-instagram fa-1x"></a>
              </div>
            </div>
          </div>
          <div id="main-card-right">
            <div id="main-card-right-wrapper">
              <div id="division-1">
                <div id="first-name-division">
                  <label htmlFor="inputFirstName">First Name</label>
                  <input
                    type="text"
                    id="inputFirstName"
                    required
                    ref={firstNameInput}
                  ></input>
                </div>
                <div id="last-name-division">
                  <label htmlFor="inputLastName">Last Name</label>
                  <input
                    type="text"
                    id="inputLastName"
                    required
                    ref={lastNameInput}
                  ></input>
                </div>
              </div>
              <div id="division-2">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  required
                  ref={emailInput}
                ></input>
              </div>
              <div id="division-3">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  id="inputMessage"
                  required
                  ref={messageInput}
                ></textarea>
              </div>
              <div id="division-4">
                <button id="submitBtn" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>

      <Footer></Footer>
    </form>
  );
}

export default Contact;
