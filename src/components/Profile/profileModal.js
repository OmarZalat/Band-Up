function ProfileModal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal_title">
          <p>Edit Your Profile</p>
        </div>
        <div className="modal_main">
          <div className="modal_main_left">
            <div className="modal_profile_picture_edit">
              <button className="modal_profile_picture_edit_button">
                Update Image
              </button>
            </div>
          </div>
          <div className="modal_main_right">
            <div className="modal_cell_1">
              <label>Username</label>
              <input type={Text} id="modal_edit_username"></input>
            </div>
            <div className="modal_cell_2">
              <div className="modal_cell_2_left">
                <label>First Name</label>
                <input type={Text} id="modal_edit_firstname"></input>
              </div>
              <div className="modal_cell_2_right">
                <label>Last Name</label>
                <input type={Text} id="modal_edit_lastname"></input>
              </div>
            </div>
            <div className="modal_cell_3">
              <label>Country</label>
              <input type={Text} id="modal_edit_country"></input>
            </div>
            <div className="modal_cell_4">
              <label>Bio</label>
              <textarea id="modal_edit_bio"></textarea>
            </div>
          </div>
        </div>
        <div className="modal_footer">
          <div className="modal_cancel_button_wrapper">
            <button id="modal_cancel_button" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
          <div className="modal_save_button_wrapper">
            <button id="modal_save_button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
