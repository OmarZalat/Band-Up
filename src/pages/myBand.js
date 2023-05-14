import { useContext, useState } from "react";
import MyBandNavigationBar from "@/components/MyBand/myBandNavigationBar";
import MyBandSettingsTab from "@/components/MyBand/myBandSettingsTab";
import NavigationBar from "@/components/UI/navigationBar";
import MyBandMembersTab from "@/components/MyBand/myBandMembersTab";
import MyBandAboutTab from "@/components/MyBand/myBandAboutTab";
import { UserContext } from "@/context/userContext";
import MyBandFeaturedUI from "@/components/MyBand/myBandFeaturedTab";
import MyBandFeaturedTab from "@/components/MyBand/myBandFeaturedTab";

function MyBand() {
  const [activeTab, setActiveTab] = useState("featured");
  const { user, setUser } = useContext(UserContext);

  function renderTab() {
    switch (activeTab) {
      case "featured":
        return <MyBandFeaturedTab />;
      case "settings":
        return <MyBandSettingsTab />;
      case "members":
        return <MyBandMembersTab />;
      case "about":
        return <MyBandAboutTab />;
      // Add cases for other tabs here
      default:
        return null;
    }
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <div id="myband_container">
        <div id="myband_wrapper">
          <div id="myband_header">
            <div id="myband_header_cover_image">
              <div id="myband_header_icon_wrapper">
                <div id="myband_header_icon"></div>
              </div>
              <div id="myband_header_name_wrapper">
                <h2>Band Name</h2>
              </div>
            </div>
          </div>
          <MyBandNavigationBar
            setActiveTab={setActiveTab}
          ></MyBandNavigationBar>
          <div id="myband_renderer">{renderTab()}</div>
        </div>
      </div>
    </>
  );
}

export default MyBand;
