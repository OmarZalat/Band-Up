import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { UserContext } from "@/context/userContext";

function FeedPost({ type, image, date, content, userdata }) {
  const { user, setUser } = useContext(UserContext);
  // console.log(UserData);
  // console.log(user.BandPosts);
  console.log(image);
  console.log(userdata);
  return (
    <>
      <div className="feed_post_card">
        <div className="feed_post_card_header">
          <div className="feed_post_card_header_profile_image">
            <div id="profile_image_header">
              {userdata?.image && <Image src={userdata.image} fill />}
            </div>
          </div>
          <div className="feed_post_card_header_profile_name">
            {userdata?.FName} {userdata?.LName}
          </div>
          <div className="feed_post_card_header_date">{date}</div>
        </div>
        <hr id="feed_post_line_break" />
        {image && (
          <div className="feed_post_card_caption">
            <p>{content}</p>
          </div>
        )}
        <hr id="feed_post_line_break" />

        <div className="feed_post_card_body">
          {image ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "100%",
              }}
            >
              <Image src={image} layout="fill" objectFit="contain" />
            </div>
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className="feed_post_card_footer">
          <div className="feed_post_card_footer_buttons">
            <div className="feed_post_card_footer_buttons_wrapper">
              Like <AiFillLike size={20} />
            </div>
            <div className="feed_post_card_footer_buttons_wrapper">
              Comment <FaRegComment size={20} />
            </div>
            <div className="feed_post_card_footer_buttons_wrapper">
              Share <AiOutlineShareAlt size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
