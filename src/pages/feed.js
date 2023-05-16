import Link from "next/link";
import FeedPost from "@/components/Feed/feedPost";
import FeedFriend from "@/components/Feed/feedFriend";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/userContext";
import LeftPanelNavigation from "@/components/UI/leftPanelNavigation";

function Feed() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false); // Loading state variable

  const [post, setPost] = useState({
    content: "",
    imageBase64: "",
  });
  useEffect(() => {
    if (!user) {
      router.push({
        pathname: "/signin",
        query: { from: router.asPath },
      });
    }
  }, [user, router]);

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
    setLoading(true); // Start loading animation

    try {
      const result = await fetch("/api/createBandPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          bandDataId: user.bandDataId,
          type: "INDIVIDUAL",
        }),
      });

      // Handle the response from the server
    } catch (error) {
      // Handle the error
    } finally {
      setLoading(false); // Stop loading animation
    }
  }

  return (
    <>
      {user ? (
        <div id="container">
          <LeftPanelNavigation />
          <div id="middle">
            <div id="middle_wrapper">
              <div id="middle_wrapper_header">
                <h1>Feed</h1>
              </div>

              <form id="post_action">
                <div id="post_action_compose_new">
                  <textarea
                    id="compose_new_textarea"
                    placeholder="Compose new post"
                    value={post.content}
                    onChange={(e) =>
                      setPost({ ...post, content: e.currentTarget.value })
                    }
                  ></textarea>
                </div>
                <div id="post_action_add_buttons">
                  <input
                    id="add_photo"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <button id="add_video">Add Video</button>
                  <button id="post" onClick={submitPost}>
                    Post
                  </button>
                </div>
              </form>

              <div id="content_wrapper">
                <div id="content_test">
                  <FeedPost></FeedPost>
                  <FeedPost></FeedPost>
                </div>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="right_wrapper">
              <div id="right_wrapper_header">
                <input
                  id="right_wrapper_header_search_bar"
                  placeholder="Search friends or bands..."
                />
              </div>

              <div id="band_wrapper">
                <h1>Your Band's Latest Posts</h1>
                <div id="band_wrapper_latest_post"></div>
              </div>
              <div id="friends_wrapper">
                <h1>Friends</h1>
                {/* <FeedFriend /> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {loading && <div className="loading-animation">Loading...</div>}{" "}
      {/* Display loading animation when loading is true */}
    </>
  );
}

export default Feed;
