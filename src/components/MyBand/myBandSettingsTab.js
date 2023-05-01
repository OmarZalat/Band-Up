function MyBandSettingsTab() {
  return (
    <>
      <div id="band_settings_wrapper">
        <div id="band_settings_card">
          <div className="settings_card_element_1">
            <div className="settings_card_element_1_left">
              <label>Band Name</label>
              <input id="settings_edit_band_name"></input>
            </div>
            <div className="settings_card_element_1_right">
              <label>Band Genre</label>
              <input id="settings_edit_band_Genre"></input>
            </div>
          </div>
          <div className="settings_card_element_2">
            <label>Members' Roles</label>
            <div id="settings_card_role_wrapper">
              <select id="settings_edit_member"></select>
              <select id="settings_edit_member_role"></select>
              <button id="settings_edit_member_role_button">Change</button>
            </div>
          </div>
          <div className="settings_card_element_3">
            <label>Kick Member</label>
            <div id="settings_card_kick_member_wrapper">
              <select id="settings_edit_kick_member"></select>
              <button id="settings_edit_kick_member_button">Kick</button>
            </div>
          </div>

          <div className="settings_card_element_4">
            <textarea id="settings_edit_bio"></textarea>
          </div>
          <div className="settings_card_element_5">
            <button id="settings_card_save_button">Save</button>
            <button id="settings_card_cancel_button">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBandSettingsTab;
