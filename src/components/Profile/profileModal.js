import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

function ProfileModal(props) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

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

  function saveChangesHandler() {
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
      userName: enteredUserName,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      country: enteredCountry,
      bio: enteredBio,
    };
    console.log(`user: ${user}`);
    console.log(`modalFormData ${modalFormData}`);
    console.log(`updatedUser: ${updatedUser}`);
    console.log(user);
    console.log(modalFormData);
    console.log(updatedUser);
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
