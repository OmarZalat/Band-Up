import { UserContext } from "@/context/userContext";
import { useContext } from "react";

function MyBandPostingUI() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div id="my_band_post_action">
        <div id="my_band_post_action_compose_new">
          <textarea
            id="my_band_compose_new_textarea"
            placeholder="Compose new post"
          ></textarea>
        </div>
        <div id="my_band_post_action_add_buttons">
          <button id="my_band_add_photo">Add Photo</button>
          <button id="my_band_add_video">Add Video</button>
          <button id="my_band_post">Post</button>
        </div>
      </div>
    </>
  );
}

export default MyBandPostingUI;
