import { UserContext } from "@/context/userContext";
import { useContext } from "react";

function ProfileCard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {" "}
      <div id="user_card">
        <div id="user_card_profile_picture">
          <div id="user_card_button_wrapper">
            <div id="follow_unfollow_button">follow {user?.FName}</div>
            <div id="more_button">▪▪▪</div>
          </div>
        </div>
        <div id="user_card_details_wrapper">
          <div id="user_card_about">
            <h1>About</h1>
            {/* should be dynamic */}

            <p></p>
          </div>
        </div>

        <div id="user_card_friends">
          <div id="user_card_friends_label">friends</div>
          {/* should be dynamic */}

          <div id="user_card_friends_number"></div>
        </div>
        <div id="user_card_posts">
          <div id="user_card_posts_label">posts</div>
          {/* should be dynamic */}
          <div id="user_card_posts_number"></div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
