import { useEffect, useState } from "react";

const defaultBg =
  "https://ik.imagekit.io/0tfb5ok46/Default-Profile-Picture-Transparent-Image.png?updatedAt=1684094895997";

function ProfileCard({ FName, bio, profilePicture }) {
  // Check if the user is viewing their own profile
  const isOwnerProfile = true; // Replace this with your logic to determine if it's the owner's profile
  const [image, setImage] = useState(null); // State variable to hold the image data

  useEffect(() => {
    fetch("/api/fetchProfilePicture")
      .then((response) => response.json())
      .then((data) => {
        setImage(data[2]?.image);
        console.log("use effect");
        console.log(data);
        console.log(image);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <>
      <div id="user_card">
        <div
          id="user_card_profile_picture"
          style={{
            backgroundImage: image ? `url(${image})` : `url("${defaultBg}")`,
          }}
        >
          {isOwnerProfile ? null : ( // Display nothing when it's the owner's profile
            <div id="user_card_button_wrapper">
              <div id="follow_unfollow_button">follow {FName}</div>
              <div id="more_button">▪▪▪</div>
            </div>
          )}
        </div>
        <div id="user_card_details_wrapper">
          <div id="user_card_about">
            <h1>About</h1>
            <p>{bio}</p>
          </div>
        </div>

        <div id="user_card_friends">
          <div id="user_card_friends_label">friends</div>
          {/* should be dynamic */}
          <div id="user_card_friends_number">0</div>
        </div>
        <div id="user_card_posts">
          <div id="user_card_posts_label">posts</div>
          {/* should be dynamic */}
          <div id="user_card_posts_number">0</div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
