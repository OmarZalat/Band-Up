import { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "@/context/userContext";

function ProfileInterests() {
  const interestsContentInfoRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  // console.log(userInterests);
  useEffect(() => {
    // Fetch user's interests from the backend

    const interestsContentInfo = interestsContentInfoRef.current;
    interestsContentInfo.addEventListener("wheel", handleWheelEvent);

    return () => {
      interestsContentInfo.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  const handleWheelEvent = (event) => {
    event.preventDefault();
    interestsContentInfoRef.current.scrollLeft += event.deltaY;
  };

  return (
    <>
      <div id="interests_wrapper">
        <div id="interests">
          <div id="interests_content_label">interests</div>
          <div id="interests_content_info" ref={interestsContentInfoRef}>
            {user.interests.length > 0 ? (
              user.interests.map((interest) => (
                <div key={interest.id} className="interest-item">
                  {interest.name}
                </div>
              ))
            ) : (
              <div>Loading interests...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInterests;
