import NavigationBar from "../../src/components/UI/navigationBar";
import cover_photo from "../../public/cover-photo-test-1";
import ProfileCard from "./profileCard";
import ProfileHeader from "./profileHeader";
import ProfileBandInfo from "./profileBandInfo";
import ProfileContent from "./profileContent";
import { useState } from "react";

function Profile() {
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
              <div id="profile_content_wrapper">
                <div id="profile_content">
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
                  <ProfileContent></ProfileContent>
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
