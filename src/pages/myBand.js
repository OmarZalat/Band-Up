import { useContext, useState } from "react";
import MyBandNavigationBar from "@/components/MyBand/myBandNavigationBar";
import MyBandSettingsTab from "@/components/MyBand/myBandSettingsTab";
import NavigationBar from "@/components/UI/navigationBar";
import MyBandMembersTab from "@/components/MyBand/myBandMembersTab";
import MyBandAboutTab from "@/components/MyBand/myBandAboutTab";
import { UserContext } from "@/context/userContext";
import MyBandFeaturedTab from "@/components/MyBand/myBandFeaturedTab";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyBand() {
  const [activeTab, setActiveTab] = useState("featured");
  const { user, setUser } = useContext(UserContext);
  const [bandData, setBandData] = useState(null);
  const router = useRouter();
  console.log(user);
  console.log(user?.bandDataId);
  console.log(bandData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchBandData", {
          method: "POST",
          body: JSON.stringify({ bandID: user.bandDataId }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        setBandData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleJoinBandClick = () => {
    router.push("/joinBand");
  };

  const handleCreateBandClick = () => {
    router.push("/createBand");
  };

  console.log(bandData);

  function renderTab() {
    switch (activeTab) {
      case "featured":
        return <MyBandFeaturedTab />;
      case "settings":
        if (user.role === "LEADER") {
          return (
            <MyBandSettingsTab
              bio={bandData.bio}
              interest={bandData.interest.name}
              name={bandData.name}
              members={bandData.bandMembers}
            />
          );
        }

      case "members":
        return <MyBandMembersTab member={bandData.bandMembers} />;
      case "about":
        return (
          <MyBandAboutTab
            bio={bandData.bio}
            interest={bandData.interest.name}
            name={bandData.name}
            members={bandData.bandMembers.length}
          />
        );
      // Add cases for other tabs here
      default:
        return null;
    }
  }

  if (user?.bandDataId === null) {
    return (
      <>
        <NavigationBar />
        <div id="myband_unassigned_wrapper">
          <h1>You are not a member of a band.</h1>
          <br></br>
          <h2>What are you waiting for? Join the experience!</h2>
          <div id="myband_unassigned_buttons_wrapper">
            <button
              className="myband_unassigned_button"
              onClick={handleJoinBandClick}
            >
              Join a band
            </button>
            <button
              className="myband_unassigned_button"
              onClick={handleCreateBandClick}
            >
              Create a band
            </button>
          </div>
        </div>
      </>
    );
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
                <h2>{bandData?.name}</h2>
              </div>
            </div>
          </div>
          <MyBandNavigationBar
            setActiveTab={setActiveTab}
            role={user.role}
          ></MyBandNavigationBar>
          <div id="myband_renderer">{renderTab()}</div>
        </div>
      </div>
    </>
  );
}

export default MyBand;
