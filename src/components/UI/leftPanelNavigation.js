import Link from "next/link";

function LeftPanelNavigation() {
  return (
    <>
      <div id="left">
        <div id="left_logo">
          <h1>Band Up</h1>
        </div>
        <div id="left_wrapper">
          <Link href="/" className="left_wrapper_element">
            Home
          </Link>
          <Link href="feed" className="left_wrapper_element">
            feed
          </Link>
          <Link href="profile" className="left_wrapper_element">
            Profile
          </Link>
          <Link href="#" className="left_wrapper_element">
            Notifications
          </Link>
          <hr />
          <Link href="createBand" className="left_wrapper_element">
            Create Band
          </Link>
          <Link href="joinBand" className="left_wrapper_element">
            Join Band
          </Link>
          <Link href="myBand" className="left_wrapper_element">
            My Band
          </Link>
          <hr />
          <Link href="about" className="left_wrapper_element">
            About Us
          </Link>
          <Link href="contact" className="left_wrapper_element">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftPanelNavigation;
