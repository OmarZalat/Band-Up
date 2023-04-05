function ProfileCard() {
  return (
    <>
      {" "}
      <div id="user_card">
        <div id="user_card_profile_picture">
          <div id="user_card_button_wrapper">
            <div id="follow_unfollow_button">follow omar</div>
            <div id="more_button">▪▪▪</div>
          </div>
        </div>
        <div id="user_card_details_wrapper">
          <div id="user_card_about">
            <h1>About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div id="user_card_friends">
          <div id="user_card_friends_label">friends</div>
          <div id="user_card_friends_number">234</div>
        </div>
        <div id="user_card_posts">
          <div id="user_card_posts_label">posts</div>
          <div id="user_card_posts_number">123</div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
