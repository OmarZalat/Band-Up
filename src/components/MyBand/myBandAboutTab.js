function MyBandAboutTab({ name, bio, interest, members }) {
  return (
    <>
      <div id="band_about_wrapper">
        <div id="band_about_card">
          <h2>About</h2>
          <div id="about_card_band_name">
            <h3>Band Name: {name}</h3>
          </div>
          <div id="about_card_band_genre">
            <h3>Band Genre: {interest}</h3>
          </div>

          <div id="about_card_band_member_number">
            <h3>Number of Members: {members}</h3>
          </div>
          <div id="about_card_band_bio">
            <h3>Description: {bio}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBandAboutTab;
