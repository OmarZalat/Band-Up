import { Router, useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import classes from "../../src/styles/signin.module.css";
import Footer from "@/components/UI/footer";

function ForgotPassword() {
  const router = useRouter();
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

    if (data.valid) {
      router.push("/passwordRecovery");
    }
  }

  return (
    <>
      <div id="forgot_password_card_container">
        <div id="forgot_password_card">
          <div id="forgot_password_card_left"></div>
          <div id="forgot_password_card_right">
            <p id="forgot_password_logo">Reset Password</p>
            <p>Enter your email to reset your password.</p>
            <div id="forgot_password_card_right_wrapper">
              <div className={classes.division}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email address"
                  id="forgot_password_submit_email_input"
                  required
                />
              </div>
              <div>
                <p>{status}</p>
              </div>
              <div className={classes.division}>
                <button
                  id="forgot_password_submit_button"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
