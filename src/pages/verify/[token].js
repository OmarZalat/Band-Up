import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
// import Footer from "../../src/components/UI/footer";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../../../src/styles/signin.module.css";

function Verify() {
  const router = useRouter();
  const { token } = router.query;
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/verifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: token }),
      });
    })();
  }, [token]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!password) {
      setError("Please enter a password");
    } else if (!validatePassword(password)) {
      setError(
        "Password must be between 8 and 16 characters and contain at least 1 special character, 1 number, 1 lower case letter, and 1 upper case letter"
      );
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Code to handle successful password validation and recovery
      await fetch("/api/updatePassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: token,
          password,
        }),
      });
    }
  }

  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  }

  function validateConfirmPassword() {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    } else {
      setError("");
      return true;
    }
  }
  return (
    <div id="verify-main">
      <div id="recover_password_card_container">
        <div id="recover_password_card">
          <div id="recover_password_card_left"></div>
          <div id="recover_password_card_right">
            <p id="recover_password_logo">Recover Your Password</p>
            <p>Enter your new password and confirm it.</p>
            <div id="recover_password_card_right_wrapper">
              <div className={classes.division}>
                <input
                  type="password"
                  placeholder="New password"
                  id="recover_password_submit_email_input"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className={classes.division}>
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="recover_confirm_password_submit_email_input"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              {error && <p className={classes.error}>{error}</p>}

              <div className={classes.division}>
                <button
                  id="recover_password_submit_button"
                  onClick={handleFormSubmit}
                >
                  Set Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verify;
