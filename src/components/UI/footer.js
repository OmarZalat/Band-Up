import Link from "next/link";

function Footer() {
  return (
    <footer id="footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div id="footer-logo">
        <h1>
          <u>Band Up</u>
        </h1>
        <p>
          Bringing the musical community
          <br />
          into one place.
        </p>
      </div>
      <div id="footer-spacing-div"></div>
      <div id="tab-1">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
      <div id="tab-2">
        <ul>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div id="socials-div-footer">
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-instagram"></a>
      </div>
    </footer>
  );
}

export default Footer;
