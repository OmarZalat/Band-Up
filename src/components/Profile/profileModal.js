import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import countries from "./countries";
import Select from "react-select";
const defaultBg =
  "https://ik.imagekit.io/0tfb5ok46/Default-Profile-Picture-Transparent-Image.png?updatedAt=1684094895997";

function ProfileModal(props) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageUploaded, setImageUploaded] = useState();
  const [BannerUploaded, setBannerUploaded] = useState();
  console.log(user);
  useEffect(() => {
    // Fetch user's interests from the backend
    if (user.interests) {
      setSelectedTags(
        user.interests.map((interest) => ({
          value: interest.id,
          label: interest.name,
        }))
      );
    } else {
      fetch("/api/getTags")
        .then((response) => response.json())
        .then((data) => {
          setTags(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching tags:", error);
          setIsLoading(false);
        });
    }
  }, []);

  const handleTagChange = (selectedOptions) => {
    if (selectedOptions.length <= 3) {
      setSelectedTags(selectedOptions);
      if (selectedOptions.length > 0) {
        let temp = [];
        selectedOptions.map((option) => {
          temp.push(option.value);
        });
        setUpdatedUser({ ...updatedUser, tagsId: temp });
      } else {
        setUpdatedUser({ ...updatedUser, tagsId: [] });
      }
    }
  };

  // Create a state variable to hold the updated user data
  const [updatedUser, setUpdatedUser] = useState(user);
  console.log(updatedUser);

  // Create a copy of the original user data
  // const defaultUser = { ...user };

  // Update the updatedUser state when the user context changes
  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  async function handleDeleteProfile() {
    const res = await fetch("/api/deleteProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user.id }),
    });
    const data = await res.json();
    if (data) {
      setUser(null);
      router.push("/");
    }
  }

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setUpdatedUser({ ...user, country });
  };

  function cancelHandler() {
    props.onCancel();
    console.log(user);
  }

  async function saveChangesHandler(e) {
    e.preventDefault();
    if (updatedUser.FName.trim() === "" || updatedUser.LName.trim() === "") {
      alert("Please enter your firstname and lastname");
      return;
    }

    try {
      const result = await fetch("/api/addProfilePicture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          imageBase64: imageUploaded,
        }),
      });

      const bannerResult = await fetch("/api/addProfileBanner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          imageBase64: BannerUploaded,
        }),
      });

      // Handle the response from the server
    } catch (error) {
      // Handle the error
    }

    const modalFormData = {
      id: user.id,
      username: updatedUser.username,
      FName: updatedUser.FName,
      LName: updatedUser.LName,
      country: updatedUser.country,
      bio: updatedUser.bio,
      tagsId: updatedUser.tagsId,
    };

    //backend code should be implemented heere
    const res = await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modalFormData }),
    });

    // Update the user data in the UserContext
    setUser(updatedUser);

    props.onCancel();
  }

  async function handleImageUpload(e) {
    const reader = new FileReader();
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.onloadend = async () => {
      console.log(reader.result);
      setImageUploaded(reader.result);
    };
  }

  async function handleBannerUpload(e) {
    const reader = new FileReader();
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.onloadend = async () => {
      console.log(reader.result);
      setBannerUploaded(reader.result);
    };
  }

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal_title">
          <p>Edit Your Profile</p>
        </div>
        <div className="modal_main">
          <div className="modal_main_left">
            <div
              className="modal_profile_picture_edit"
              style={{
                backgroundImage: user.image
                  ? `url(${user.image})`
                  : `url("${defaultBg}")`,
              }}
            >
              <label
                htmlFor="add_profile_photo"
                id="add_profile_photo_label"
                className="profile_picture_input_label"
              >
                Upload Image
              </label>
              <input
                id="add_profile_photo"
                type="file"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
            <div className="modal_banner_picture_edit">
              <label
                htmlFor="add_banner_photo"
                id="add_banner_photo_label"
                className="banner_picture_input_label"
              >
                Upload Banner
              </label>
              <input
                id="add_banner_photo"
                type="file"
                onChange={handleBannerUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="modal_main_right">
            <div className="modal_cell_1">
              <label>Username</label>
              <input
                type={Text}
                id="modal_edit_username"
                value={updatedUser?.username}
                onChange={(e) =>
                  setUpdatedUser({
                    ...updatedUser,
                    username: e.currentTarget.value,
                  })
                }
              ></input>
            </div>
            <div className="modal_cell_2">
              <div className="modal_cell_2_left">
                <label>First Name</label>
                <input
                  type={Text}
                  id="modal_edit_firstname"
                  value={updatedUser?.FName}
                  onChange={(event) =>
                    setUpdatedUser({
                      ...user,
                      FName: event.currentTarget.value,
                    })
                  }
                ></input>
              </div>
              <div className="modal_cell_2_right">
                <label>Last Name</label>
                <input
                  type={Text}
                  id="modal_edit_lastname"
                  value={updatedUser?.LName}
                  onChange={(event) =>
                    setUpdatedUser({
                      ...user,
                      LName: event.currentTarget.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="modal_cell_3">
              <div className="modal_cell_3_left">
                <label>Country</label>
                <select
                  id="modal_edit_country"
                  value={updatedUser?.country}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal_cell_3_right">
                <label>Interests (up to 3)</label>

                <Select
                  options={
                    isLoading
                      ? []
                      : tags.map((tag) => ({
                          value: tag.id,
                          label: tag.name,
                        }))
                  }
                  isMulti
                  value={selectedTags}
                  onChange={handleTagChange}
                />
              </div>
            </div>
            <div className="modal_cell_4">
              <label>Bio</label>
              <textarea
                id="modal_edit_bio"
                value={updatedUser?.bio}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, bio: e.currentTarget.value })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className="modal_footer">
          <div className="modal_delete_profile_wrapper">
            <button id="modal_delete_profile" onClick={handleDeleteProfile}>
              Delete Profile
            </button>
          </div>
          <div className="modal_cancel_button_wrapper">
            <button id="modal_cancel_button" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
          <div className="modal_save_button_wrapper">
            <button id="modal_save_button" onClick={saveChangesHandler}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
