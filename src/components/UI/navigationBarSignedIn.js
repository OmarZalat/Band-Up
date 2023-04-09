function NavigationBarSignedIn() {
  return (
    <>
      {" "}
      <div id="navigation-bar">
        <div id="nav-bar-container">
          <div id="nav-bar-left-logo">
            <h1>Band Up</h1>
          </div>
          <div id="nav-bar-center-container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/feed">Feed</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div id="nav-bar-right-container">
            <div id="nav-bar-right-container-wrapper">
              <div id="nav-bar-right-container-wrapper-signin">
                <button id="signinBtn" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div id="nav-bar-right-container-wrapper-signup">
                <button id="signupBtn" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBarSignedIn;
