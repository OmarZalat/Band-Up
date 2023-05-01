import JoinFeedCarousel from "@/components/UI/joinFeedCarousel";
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
            <h2>Recruiting Bands</h2>
            <p>According to your interests</p>
          </div>
          <div id="test"></div>
        </div>
      </div>
    </>
  );
}

export default JoinBand;
