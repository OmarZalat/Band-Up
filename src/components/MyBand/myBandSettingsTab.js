import { useState } from "react";

function MyBandSettingsTab() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
  });
  const [nameError, setNameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [memberRoleOptions, setMemberRoleOptions] = useState([
    "Vocalist",
    "Lead Guitarist",
    "Rythem Guitarist",
    "Bassist",
    "Drummer",
    "Keyboardist",
    "Pianist",
    "Percussionist",
    "Horn Player",
    "Wind Player",
    "Songwriter",
  ]);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, name: value }));
    if (value.length > 30) {
      setNameError("Name cannot exceed 30 characters");
    } else {
      setNameError("");
    }
  };

  const handleBioChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, bio: value }));
    if (value.length > 256) {
      setBioError("Bio cannot exceed 256 characters");
    } else {
      setBioError("");
    }
  };

  return (
    <>
      <div id="band_settings_wrapper">
        <div id="band_settings_card">
          <div className="settings_card_element_1">
            <div className="settings_card_element_1_left">
              <label>Band Name</label>
              <input
                id="settings_edit_band_name"
                value={formData.name}
                onChange={handleNameChange}
              />
              {nameError && <p className="error_message">{nameError}</p>}
            </div>
            <div className="settings_card_element_1_right">
              <label>Band Genre</label>
              <select id="settings_edit_band_Genre"></select>
            </div>
          </div>
          <div className="settings_card_element_2">
            <label>Members' Roles</label>
            <div id="settings_card_role_wrapper">
              <select id="settings_edit_member"></select>
              <select id="settings_edit_member_role">
                <option value="" disabled selected hidden>
                  Role
                </option>
                {memberRoleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
            <label>Bio</label>
            <textarea
              id="settings_edit_bio"
              value={formData.bio}
              onChange={handleBioChange}
              required
            ></textarea>
            {bioError && <p className="error_message">{bioError}</p>}
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
