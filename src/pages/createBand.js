import { useState, useMemo } from "react";
import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/UI/footer";

function CreateBand() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    bio: "",
    name: "",
    userID: user?.id,
    role: user?.role,
    tagID: "",
    verificationStatus: user?.emailVerification,
  });

  const [nameError, setNameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [tags, setTags] = useState([]);
  console.log(user);
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

  const handleTagChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, tagID: value }));
  };

  const handleCreate = async (event) => {
    const result = await fetch("/api/createBand", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    console.log(formData);
    console.log(result);
  };

  const tagOptions = useMemo(
    () =>
      tags.map((tag) => (
        <option key={tag.id} value={tag.id}>
          {tag.name}
        </option>
      )),
    [tags]
  );

  return (
    <>
      <div id="container">
        <form id="create_band_form">
          <div id="name_wrapper">
            <input
              id="name_input"
              type="text"
              placeholder="Band Name"
              value={formData.name}
              onChange={handleNameChange}
              required
            />
            {nameError && <div className="error">{nameError}</div>}
          </div>

          <div id="bio_wrapper">
            <textarea
              id="bio_input"
              placeholder="Band Bio"
              value={formData.bio}
              onChange={handleBioChange}
              required
            />
            {bioError && <div className="error">{bioError}</div>}
          </div>

          <div id="tag_wrapper">
            <select
              id="tagID"
              required
              name="Genre"
              value={formData.tagID}
              onChange={handleTagChange}
            >
              <option value="" disabled>
                Genre
              </option>
              {tagOptions}
            </select>
          </div>

          <button id="create_band_button" type="submit" onClick={handleCreate}>
            Create
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CreateBand;
