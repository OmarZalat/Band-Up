import Footer from "../components/UI/footer";
import NavigationBar from "../components/UI/navigationBar";
import image1 from "../../public/home-page-image-1.jpeg";
import image2 from "../../public/screenshot-2.jpg";
import image3 from "../../public/image-1.jpg";
import image4 from "../../public/image-7.jpg";
import image5 from "../../public/image-5.jpg";
import Image from "next/image";

function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="spacing-div-1"></div>
      <div id="title-home-page">
        <h1>Band Up</h1>
        <br />
        <h2>The Musicians’ Social Network</h2>
      </div>
      <div id="home-page-image-1">
        <Image src={image1}></Image>
      </div>
      <div className="spacing-div-1"></div>
      <div className="image-description-container">
        <div className="image-description-container-wrapper">
          <div className="image">
            <Image src={image2}></Image>
          </div>
          <div className="description">
            <h1>
              connect with other
              <br />
              musicians
            </h1>
            <p>
              Surround yourself with people that share the same passions as
              yours. Band Up makes it easier to connect with other musicians so
              that you can meet and share your musical ideas together.
            </p>
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <div className="image-description-container">
        <div className="image-description-container-wrapper">
          <div className="description">
            <h1>choose a band</h1>
            <p>
              Playing with other musicians is extremely satisfying and fun. But
              it's also a great way to become a better musician. Join a band to
              share the experience. <br />
              <br />
              Don't want to join an existing band? create one and invite others
              to join you.
            </p>
          </div>
          <div className="image">
            <Image src={image3} width={570} height={311} />
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <div className="image-description-container">
        <div className="image-description-container-wrapper">
          <div className="image">
            <Image src={image4} width={570} height={311} />
          </div>
          <div className="description">
            <h1>chat and share your passion</h1>
            <p>
              Upload your work to be reached. Share your jamming sessions or
              cover of a song to be discovered by others. Expand your social
              network by chatting with your connections.
            </p>
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <div className="image-description-container">
        <div className="image-description-container-wrapper">
          <div className="description">
            <h1>for all</h1>
            <p>
              You are never too old to start building your talents. Band Up
              welcomes everyone that is passionate about persuing a career or
              hobby in playing music.
            </p>
          </div>
          <div className="image">
            <Image src={image5} width={570} height={311} />
          </div>
        </div>
      </div>
      <div className="spacing-div-1"></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
