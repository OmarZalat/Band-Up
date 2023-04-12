import NavigationBar from "../../src/components/UI/navigationBar";
import ProfileCard from "@/components/Profile/profileCard";
import ProfileHeader from "@/components/Profile/profileHeader";
import ProfileBandInfo from "@/components/Profile/profileBandInfo";
import ProfileContent from "@/components/Profile/profileContent";
import { useContext, useState } from "react";
import ProfileInterests from "@/components/Profile/profileInterests";
import { UserContext } from "@/context/userContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div id="container">
        <div id="wrapper">
          {/* profileHeader goes here */}
          <ProfileHeader></ProfileHeader>
          <div id="main">
            <div id="main_left">
              {/* ProfileCard goes here */}
              <ProfileCard></ProfileCard>
            </div>
            <div id="main_right">
              {/* bandInfo goes here */}
              <ProfileBandInfo></ProfileBandInfo>
              <ProfileInterests></ProfileInterests>
              <div id="profile_content_wrapper">
                <div id="profile_content">
                  {/* should be dynamic */}

                  {/* <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
