import { useRef, useEffect } from "react";

function ProfileInterests() {
  const interestsContentInfoRef = useRef(null);

  useEffect(() => {
    const interestsContentInfo = interestsContentInfoRef.current;

    interestsContentInfo.addEventListener("wheel", (event) => {
      event.preventDefault();
      interestsContentInfo.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <>
      <div id="interests_wrapper">
        <div id="interests">
          <div id="interests_content_label">interests</div>
          <div id="interests_content_info" ref={interestsContentInfoRef}>
            <p>rock</p>
            <p>metal</p>
            <p>metal</p>
            <p>metal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInterests;
