import MyBandPostingUI from "../UI/myBandPostingUI";

function MyBandFeaturedTab({ bandData }) {
  return (
    <>
      <div id="band_featured_wrapper">
        <div id="band_featured_card">
          <MyBandPostingUI bandData={bandData} />
        </div>
      </div>
    </>
  );
}

export default MyBandFeaturedTab;
