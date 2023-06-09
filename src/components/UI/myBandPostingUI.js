import { UserContext } from "@/context/userContext";
import { useState } from "react";
import { useContext } from "react";

function MyBandPostingUI({ bandData }) {
  const { user, setUser } = useContext(UserContext);
  const [post, setPost] = useState({ content: "" });

  async function handleImageUpload(e) {
    const reader = new FileReader();
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      reader.readAsDataURL(currentFile);
    }
    reader.onloadend = async () => {
      console.log(reader.result);
      setPost({ ...post, imageBase64: reader.result });
    };
  }

  async function submitPost(e) {
    e.preventDefault();

    try {
      const result = await fetch("/api/createBandPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          bandDataId: bandData.id,
          type: "BAND",
          userID: user.id,
        }),
      });

      // Handle the response from the server
    } catch (error) {
      // Handle the error
    } finally {
    }
  }

  return (
    <>
      <div id="my_band_post_action">
        <div id="my_band_post_action_compose_new">
          <textarea
            id="my_band_compose_new_textarea"
            placeholder="Compose new post"
            onChange={(e) =>
              setPost({
                ...post,
                content: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div id="my_band_post_action_add_buttons">
          <input
            onChange={handleImageUpload}
            type="file"
            id="my_band_add_photo"
          ></input>
          <button id="my_band_add_video">Add Video</button>
          <button id="my_band_post" onClick={submitPost}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default MyBandPostingUI;
