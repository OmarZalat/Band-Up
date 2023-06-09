import Image from "next/image";

function MyBandMember({ FirstName, LastName, imageURL, Position }) {
  return (
    <>
      <div className="member">
        <div className="member_description">
          <div className="member_description_image">
            <Image fill src={imageURL} />
          </div>
          <div className="member_description_name">
            <p>
              {FirstName} {LastName} ({Position})
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBandMember;
