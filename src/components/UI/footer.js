import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

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
        <p>Your Music Journey Starts Here</p>
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
            <Link href="/privacyPolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/termsAndConditions">Terms and Conditions</Link>
          </li>
        </ul>
      </div>
      <div id="socials-div-footer">
        <Link
          href="https://discord.gg/8dv2hTpENZ"
          className="socials_icons"
          target="_blank"
        >
          <BsDiscord size={25} />
        </Link>
        <Link
          href="https://twitter.com/BandUp_LB"
          className="socials_icons"
          target="_blank"
        >
          <BsTwitter size={25} />
        </Link>
        <Link
          href="https://www.instagram.com/bandup_lb/"
          className="socials_icons"
          target="_blank"
        >
          <BsInstagram size={25} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
