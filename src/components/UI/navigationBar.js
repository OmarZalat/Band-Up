import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

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
              <img src="../../public/profile-pic.jpeg" />
              <div id="nav-bar-right-container-profile">
                <h4 className="h4-class">Profile ▼</h4>
                <div id="dropdown">
                  <div className="dropdown-content">
                    <Link href="/profile">View Profile</Link>
                  </div>
                  <div className="dropdown-content">
                    <Link href="#">Settings & Privacy</Link>
                  </div>
                  <div className="dropdown-content">
                    <Link href="#">Help</Link>
                  </div>
                  <div className="dropdown-content">
                    <Link href="#">Language</Link>
                  </div>
                  <div className="dropdown-content">
                    <Link href="#">Sign Out</Link>
                  </div>
                </div>
              </div>
            </div>
            <div id="nav-bar-right-container-notification">
              {/* <img src="/Media/Icons/nav-bar-notification-bell.png" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
