import Image from "next/image";

function FeedFriend({ id, name, imageURL }) {
  return (
    <>
      <div className="friend">
        <div className="friend_description">
          <div className="friend_description_image">
            <Image
              fill
              src={
                imageURL ||
                "https://ik.imagekit.io/0tfb5ok46/Default-Profile-Picture-Transparent-Image.png?updatedAt=1684094895997"
              }
            />
          </div>
          <div className="friend_description_name">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedFriend;
