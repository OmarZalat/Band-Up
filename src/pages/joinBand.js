import JoinBandCarousel from "@/components/UI/joinBandCarousel";
import LeftPanelNavigation from "@/components/UI/leftPanelNavigation";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

function JoinBand() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div id="joinband_container">
        <LeftPanelNavigation />
        <div id="joinband_container_wrapper">
          <div id="recruiting_band_wrapper">
            <h2 style={{ marginLeft: "80px" }}>Recruiting Bands</h2>
            <p style={{ marginLeft: "80px" }}>According to your interests</p>

            <div className="recruiting_band_carousel">
              <JoinBandCarousel />
            </div>
          </div>
          <hr id="joinband_line_break"></hr>
          <div id="suggested_band_wrapper">
            <h2 style={{ marginLeft: "80px" }}>More Suggestions</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinBand;
