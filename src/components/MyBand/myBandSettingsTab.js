import { useState } from "react";
import { useEffect } from "react";

function MyBandSettingsTab({ name, bio, interest, members, ID }) {
  const [formData, setFormData] = useState({
    name: name,
    bio: bio,
  });
  const [nameError, setNameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [positions, setPositions] = useState([]);
  const [tags, setTags] = useState([]);
  const [bandProfilePictureUpload, setBandProfilePictureUpload] = useState();
  const [bandBannerUploaded, setBandBannerUploaded] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/fetchPosition");
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const data = await response.json();
      setPositions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch tags from the API endpoint and set them in state
    fetch("/api/getTags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

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

  async function saveChangesHandler(e) {
    e.preventDefault();

    const bandPictureresult = await fetch("/api/addBandProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: ID,
        imageBase64: bandProfilePictureUpload,
      }),
    });

    const bandBannerResult = await fetch("/api/addBandBanner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: ID,
        imageBase64: bandBannerUploaded,
      }),
    });
  }

  async function handleBandProfilePictureUpload(e) {
    const reader = new FileReader();
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.onloadend = async () => {
      console.log(reader.result);
      setBandProfilePictureUpload(reader.result);
    };
  }

  async function handleBandBannerUpload(e) {
    const reader = new FileReader();
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.onloadend = async () => {
      console.log(reader.result);
      setBandBannerUploaded(reader.result);
    };
  }

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
              <select id="settings_edit_band_Genre">
                <option value="" disabled selected hidden>
                  {interest}
                </option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.name}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="settings_card_element_2">
            <label>Members' Roles</label>
            <div id="settings_card_role_wrapper">
              <select id="settings_edit_member">
                <option value="" disabled selected hidden>
                  Member
                </option>
                {members.map((member) => (
                  <option key={member.id} value={member.FName}>
                    {member.FName}
                  </option>
                ))}
              </select>
              <select id="settings_edit_member_role">
                <option value="" disabled selected hidden>
                  Role
                </option>
                {positions.map((position) => (
                  <option key={position.id} value={position.name}>
                    {position.name}
                  </option>
                ))}
              </select>

              <button id="settings_edit_member_role_button">Change</button>
            </div>
          </div>
          <div className="settings_card_element_3">
            <label>Kick Member</label>
            <div id="settings_card_kick_member_wrapper">
              <select id="settings_edit_kick_member">
                <option value="" disabled selected hidden>
                  Member
                </option>
                {members.map((member) => (
                  <option key={member.id} value={member.FName}>
                    {member.FName}
                  </option>
                ))}
              </select>
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
          <div className="settings_card_element_6">
            <div className="settings_card_element_6_profile_picture">
              <label
                htmlFor="add_band_profile_picture_photo"
                id="add_band_profile_picture_photo_label"
                className="band_profile_picture_picture_input_label"
              >
                Upload picture
              </label>
              <input
                id="add_band_profile_picture_photo"
                type="file"
                onChange={handleBandProfilePictureUpload}
                style={{ display: "none" }}
              />
            </div>
            <div className="settings_card_element_6_banner">
              <label
                htmlFor="add_band_banner_photo"
                id="add_band_banner_photo_label"
                className="band_banner_picture_input_label"
              >
                Upload Banner
              </label>
              <input
                id="add_band_banner_photo"
                type="file"
                onChange={handleBandBannerUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="settings_card_element_5">
            <button id="settings_card_save_button" onClick={saveChangesHandler}>
              Save
            </button>
            <button id="settings_card_cancel_button">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBandSettingsTab;
