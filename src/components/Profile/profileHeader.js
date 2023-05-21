import { useState } from "react";
import ProfileBackdrop from "./profileBackdrop";
import ProfileModal from "./profileModal";

const defaultBanner =
  "https://ik.imagekit.io/0tfb5ok46/image_1_.png?updatedAt=1684094946375";

function ProfileHeader({ LName, FName, country, backgroundImage }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(LName, FName, country, backgroundImage);

  function deleteHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <>
      <div
        id="profile_header"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : `url("${defaultBanner}")`,
        }}
      >
        <div id="profile_header_info">
          <div id="info_1">
            <p className="info_1_name">
              {FName} {LName}
            </p>
            <p className="info_1_country">{country}</p>
          </div>
          <div id="info_2">
            <div id="share_button">share profile</div>
            <div id="edit_button" onClick={deleteHandler}>
              edit profile
            </div>
            {modalIsOpen && (
              <ProfileModal onCancel={closeModalHandler}></ProfileModal>
            )}
            {modalIsOpen && (
              <ProfileBackdrop onCancel={closeModalHandler}></ProfileBackdrop>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
