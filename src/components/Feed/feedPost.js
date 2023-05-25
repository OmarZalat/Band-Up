import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";

function FeedPost({ type, image, date, content }) {
  console.log(type, image, content, date);

  return (
    <>
      <div className="feed_post_card">
        <div className="feed_post_card_header">
          <div className="feed_post_card_header_profile_image"></div>
          <div className="feed_post_card_header_profile_name">name</div>
          <div className="feed_post_card_header_date">{date}</div>
        </div>
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
            <AiFillLike size={30} />
            <FaRegComment size={30} />
            <AiOutlineShareAlt size={30} />
          </div>
          {image && (
            <div className="feed_post_card_footer_caption">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedPost;
