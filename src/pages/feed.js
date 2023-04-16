import Link from "next/link";
import FeedPost from "@/components/Feed/feedPost";
import FeedFriend from "@/components/Feed/feedFriend";

function Feed() {
  return (
    <>
      <div id="container">
        <div id="left">
          <div id="left_logo">
            <h1>Band Up</h1>
          </div>
          <div id="left_wrapper">
            <Link href="/" className="left_wrapper_element">
              Home
            </Link>
            <Link href="#" className="left_wrapper_element">
              Notifications
            </Link>
            <hr />
            <Link href="#" className="left_wrapper_element">
              Create Band
            </Link>
            <Link href="#" className="left_wrapper_element">
              Join Band
            </Link>
            <hr />
            <Link href="about" className="left_wrapper_element">
              About Us
            </Link>
            <Link href="contact" className="left_wrapper_element">
              Contact Us
            </Link>
          </div>
        </div>
        <div id="middle">
          <div id="middle_wrapper">
            <div id="middle_wrapper_header">
              <h1>Feed</h1>
            </div>
            <div id="post_action">
              <div id="post_action_compose_new">
                <textarea
                  id="compose_new_textarea"
                  placeholder="Compose new post"
                ></textarea>
              </div>
              <div id="post_action_add_buttons">
                <button id="add_photo">Add Photo</button>
                <button id="add_video">Add Video</button>
                <button id="post">Post</button>
              </div>
            </div>
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
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
              <FeedFriend></FeedFriend>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
