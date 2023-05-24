import Image from "next/image";

function FeedPost({ type, image, content }) {
  console.log(type, image, content);
  return (
    <>
      <div className="card">
        {image && <Image width={100} height={100} src={image} />}

        <p>{content}</p>
      </div>
    </>
  );
}

export default FeedPost;
