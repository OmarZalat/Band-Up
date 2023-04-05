import { useState } from "react";
import ProfileBackdrop from "./profileBackdrop";
import ProfileModal from "./profileModal";

function ProfileHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <>
      <div id="profile_header">
        <div id="profile_header_info">
          <div id="info_1">
            <p className="info_1_name">Omar Zalat</p>
            <p className="info_1_country">Beirut, Lebanon</p>
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
