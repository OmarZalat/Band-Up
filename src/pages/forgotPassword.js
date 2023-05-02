import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import classes from "../../src/styles/signin.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  async function submitHandler() {
    const res = await fetch("/api/emailChecker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enteredEmail: email }),
    });
    const data = await res.json();
    console.log(data);
    setStatus(data.response);
  }
  return (
    <div id="main-card-container">
      <div id="main-card">
        <div id="main-card-left"></div>
        <div id="main-card-right">
          <p id="signin-logo">Sign in</p>
          <div id="main-card-right-wrapper">
            <div className={classes.division}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
                id="signin-email-input"
                required
              />
            </div>
            <div>
              <p>{status}</p>
            </div>
            <div className={classes.division}>
              <button id="signinBtn" onClick={submitHandler}>
                Sign in
              </button>
            </div>
            <hr id="line-break" />
            <div className="spacing-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
