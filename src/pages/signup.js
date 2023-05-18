import Footer from "../../src/components/UI/footer";
import { useRef } from "react";
import { useState } from "react";
import NewsletterCheckbox from "../../src/components/UI/newsLetterCheckBox";
import { useRouter } from "next/router";
import countries from "@/components/Profile/countries";
import TermsAndConditionsCheckBox from "@/components/UI/termsAndConditionsCheckBox";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const dayInput = useRef();
  const monthInput = useRef();
  const yearInput = useRef();
  const genderInput = useRef();
  const countryInput = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  }

  function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  // function PasswordValidation() {}

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredEmail = emailInput.current.value;
    const result = await fetch("/api/fetchUserByEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enteredEmail }),
    });
    console.log("FETCH USER BY EMAIL: " + result);
    //data is an object that has a response of true or false
    //if true, the email exists in the DB
    const data = await result.json();

    if (data.response) {
      alert("Email already found, please sign in");
      return;
    }

    if (!validateEmail(enteredEmail)) {
      alert("Please enter a valid email address");
      return;
    }
    const enteredPassword = passwordInput.current.value;
    if (!validatePassword(enteredPassword)) {
      alert(
        "Password must be between 8 and 16 characters and contain at least 1 special character, 1 number, 1 lower case letter, and 1 upper case letter"
      );
      return;
    }
    const enteredConfirmPassword = confirmPasswordInput.current.value;

    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }

    const enteredDay = dayInput.current.value;

    if (!enteredDay) {
      alert("choose a day");
      return;
    }
    const enteredMonth = monthInput.current.value;
    if (!enteredMonth) {
      alert("choose a month");
      return;
    }
    const enteredYear = yearInput.current.value;
    if (!enteredYear) {
      alert("choose a year");
      return;
    }
    const enteredGender = genderInput.current.value;
    if (!enteredGender) {
      alert("choose a gender");
      return;
    }
    const enteredCountry = countryInput.current.value;
    if (!enteredCountry) {
      alert("choose a country");
      return;
    }

    const DOB = enteredDay + "/" + enteredMonth + "/" + enteredYear;

    const formData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      confirmedPassword: enteredConfirmPassword,
      DOB,
      gender: enteredGender,
      country: enteredCountry,
      subscribe: isChecked,
    };

    const res = await fetch("/api/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    console.log(formData);
    router.push("/signin");
  }

  return (
    <form onSubmit={submitHandler}>
      <div id="title-signup-page">
        <h1>Band Up</h1>
        <br />
        <h2>Your Music Journey Starts Here.</h2>
      </div>
      <div id="main-card-container">
        <div id="main-card">
          <div id="main-card-left"></div>
          <div id="main-card-right">
            <p id="signin-logo">Sign up</p>
            <div id="main-card-right-wrapper">
              <div className="division-1">
                <div className="division-1-sub">
                  <input
                    type="text"
                    id="first-name-input"
                    placeholder="First name"
                    required
                    ref={firstNameInput}
                  />
                </div>
                <div className="division-1-sub">
                  <input
                    type="text"
                    id="last-name-input"
                    placeholder="Last name"
                    required
                    ref={lastNameInput}
                  />
                </div>
              </div>
              <div className="division-1">
                <input
                  type="email"
                  id="email-input"
                  placeholder="Email"
                  required
                  ref={emailInput}
                />
              </div>
              <div className="division-1">
                <div className="division-1-sub">
                  <input
                    type="password"
                    id="password-input"
                    placeholder="Password"
                    required
                    ref={passwordInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="division-1-sub">
                  <input
                    type="password"
                    id="confirm-password-input"
                    placeholder="Confirm password"
                    required
                    ref={confirmPasswordInput}
                    value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
              <label>Date of birth</label>
              <div className="division-1">
                <select id="day" name="day" required ref={dayInput}>
                  <option value="" disabled selected>
                    Day
                  </option>
                  {[...Array(31)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                <select id="month" name="month" required ref={monthInput}>
                  <option value="" disabled selected>
                    Month
                  </option>
                  {Array.from({ length: 12 }, (_, index) => {
                    const value = String(index + 1).padStart(2, "0");
                    const name = new Date(2000, index).toLocaleString(
                      "default",
                      { month: "long" }
                    );
                    return (
                      <option key={value} value={value}>
                        {name}
                      </option>
                    );
                  })}
                </select>

                <select id="year" name="year" required ref={yearInput}>
                  <option value="" disabled selected>
                    Year
                  </option>
                  {Array.from({ length: 84 }, (_, i) => 1940 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="division-1">
                <select id="gender" required ref={genderInput}>
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <select id="country" required ref={countryInput}>
                  <option value="" disabled selected>
                    Country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="division-1">
                <button id="signup-btn" onClick={submitHandler}>
                  Sign Up
                </button>
              </div>
            </div>
            <TermsAndConditionsCheckBox />
            <NewsletterCheckbox
              isChecked={isChecked}
              setIsChecked={() => setIsChecked((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <Footer></Footer>
    </form>
  );
}

export default SignUp;
