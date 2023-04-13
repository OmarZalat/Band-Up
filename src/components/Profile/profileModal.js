import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import countries from "./countries";

function ProfileModal(props) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  // Create a state variable to hold the updated user data
  const [updatedUser, setUpdatedUser] = useState(user);

  // Create a copy of the original user data
  const defaultUser = { ...user };

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
    setUser(null);
    router.push("/");
  }

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setUser({ ...user, country });
    // console.log(user);
  };

  function cancelHandler() {
    setUpdatedUser(defaultUser);
    props.onCancel();
    console.log(user);
  }

  //modal info in object form
  const usernameInput = useRef();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const countryInput = useRef();
  const bioInput = useRef();

  async function saveChangesHandler() {
    if (updatedUser.FName.trim() === "" || updatedUser.LName.trim() === "") {
      alert("Please enter your firstname and lastname");
      return;
    }

    // Update the user data in the UserContext
    setUser(updatedUser);

    // Reset the updated user data to the default data
    setUpdatedUser(defaultUser);

    const enteredUserName = usernameInput.current.value;
    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredCountry = countryInput.current.value;
    const enteredBio = bioInput.current.value;

    const modalFormData = {
      id: user.id,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      userName: enteredUserName,
      country: enteredCountry,
      bio: enteredBio,
    };

    const res = await fetch("/api/updateProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modalFormData }),
    });

    // console.log(`user: ${user}`);
    // console.log(`modalFormData ${modalFormData}`);
    // console.log(`updatedUser: ${updatedUser}`);
    // console.log(user);
    // console.log(modalFormData);
    // console.log(updatedUser);
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
              <input
                type={Text}
                id="modal_edit_username"
                ref={usernameInput}
              ></input>
            </div>
            <div className="modal_cell_2">
              <div className="modal_cell_2_left">
                <label>First Name</label>
                <input
                  type={Text}
                  id="modal_edit_firstname"
                  value={user.FName}
                  ref={firstNameInput}
                  onChange={(event) =>
                    setUser({ ...user, FName: event.target.value })
                  }
                ></input>
              </div>
              <div className="modal_cell_2_right">
                <label>Last Name</label>
                <input
                  type={Text}
                  id="modal_edit_lastname"
                  value={user.LName}
                  ref={lastNameInput}
                  onChange={(event) =>
                    setUser({ ...user, LName: event.target.value })
                  }
                ></input>
              </div>
            </div>
            {/* <div className="modal_cell_3">
              <label>Country</label>
              <select id="modal_edit_country">
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="modal_cell_3">
              <label>Country</label>
              <select
                id="modal_edit_country"
                value={user.country}
                ref={countryInput}
                onChange={handleCountryChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal_cell_4">
              <label>Bio</label>
              <textarea id="modal_edit_bio" ref={bioInput}></textarea>
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
