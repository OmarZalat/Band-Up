import Footer from "../../src/components/UI/footer";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { useState } from "react";
import classes from "../../src/styles/signin.module.css";
import { UserContext } from "@/context/userContext";

function SignIn() {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();
  const { user, setUser } = useContext(UserContext);
  function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  function createNewAccountHandler() {
    window.location.href = "/signup";
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;

    if (!validateEmail(enteredEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const enteredPassword = passwordInput.current.value;

    if (!enteredPassword) {
      alert("Enter a password");
      return;
    }

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const res = await fetch("/api/fetchUserData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    const data = await res.json();
    console.log("DATA IS: " + data);
    if (data) {
      setUser(data);
      router.push("/profile");
    } else {
      alert("Email or password are invalid!");
    }
  }

  return (
    <div>
      <div id="title-signup-page">
        <h1>Band Up</h1>
        <br />
        <h2>Bringing the musical community into one place.</h2>
      </div>
      <div id="main-card-container">
        <div id="main-card">
          <div id="main-card-left"></div>
          <div id="main-card-right">
            <p id="signin-logo">Sign in</p>
            <div id="main-card-right-wrapper">
              <div className={classes.division}>
                <input
                  type="email"
                  placeholder="Email address"
                  id="signin-email-input"
                  required
                  ref={emailInput}
                />
              </div>
              <div className={classes.division}>
                <input
                  type="password"
                  placeholder="Password"
                  id="signin-password-input"
                  required
                  ref={passwordInput}
                />
              </div>
              <div className={classes.division}>
                <button id="signinBtn" onClick={submitHandler}>
                  Sign in
                </button>
                <p id="forgotten-password-hyperlink">Forgotten password?</p>
              </div>
              <hr id="line-break" />
              <div className="spacing-1"></div>
              <div className={classes.division}>
                <button
                  id="create-new-account-btn"
                  onClick={createNewAccountHandler}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <Footer></Footer>
    </div>
  );
}

export default SignIn;
