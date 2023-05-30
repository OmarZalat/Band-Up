import { useRef, useEffect, useState } from "react";

function ProfileInterests() {
  const interestsContentInfoRef = useRef(null);
  const [userInterests, setUserInterests] = useState([]);

  // console.log(userInterests);
  useEffect(() => {
    // Fetch user's interests from the backend
    fetchUserInterests();

    const interestsContentInfo = interestsContentInfoRef.current;
    interestsContentInfo.addEventListener("wheel", handleWheelEvent);

    return () => {
      interestsContentInfo.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  const fetchUserInterests = async () => {
    try {
      // Make an API request to fetch user's interests
      const response = await fetch("/api/fetchUserData"); // Replace "/api/user/interests" with your actual API endpoint

      if (response.ok) {
        const interests = await response.json();
        setUserInterests(interests);
      } else {
        console.log("Failed to fetch user interests.");
      }
    } catch (error) {
      console.log("Error while fetching user interests:", error);
    }
  };

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
            {userInterests.length > 0 ? (
              userInterests.map((interest) => (
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
