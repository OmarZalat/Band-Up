function JoinBandCarouselCard() {
  return (
    <>
      <div className="carousel_slider_band_card">
        <div className="slider_band_card_icon_wrapper">
          <div className="slider_band_card_icon"></div>
        </div>
        <div className="slider_band_card_description">
          <p className="description_name_genre">{`Band Name (Genre)`}</p>
          <p className="description_role">{`Searching for a ...`}</p>
        </div>
        <div className="slider_band_card_apply">
          <button className="slider_band_card_apply_button">Apply</button>
        </div>
      </div>
    </>
  );
}

export default JoinBandCarouselCard;
