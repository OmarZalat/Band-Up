import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";

function NavigationBar() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const handleSignInClick = () => {
    router.push("/signin");
  };

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  return (
    <div id="navigation-bar">
      <div id="nav-bar-container">
        <div id="nav-bar-left-logo">
          <h1>Band Up</h1>
        </div>
        <div id="nav-bar-center-container">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/feed">Feed</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {!user ? (
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
        ) : (
          <div id="nav-bar-right-container">
            <div id="nav-bar-right-container-profile-container">
              <img src="/Media/Images/profile-pic.jpeg" />
              <div id="nav-bar-right-container-profile">
                <h4 className="h4-class">Profile ▼</h4>
                <div id="dropdown">
                  <div className="dropdown-content">
                    <a href="#">View Profile</a>
                  </div>
                  <div className="dropdown-content">
                    <a href="#">Settings & Privacy</a>
                  </div>
                  <div className="dropdown-content">
                    <a href="#">Help</a>
                  </div>
                  <div className="dropdown-content">
                    <a href="#">Language</a>
                  </div>
                  <div className="dropdown-content">
                    <a href="#">Sign Out</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="nav-bar-right-container-notification">
              <img src="/Media/Icons/nav-bar-notification-bell.png" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
