import { UserContext } from "@/context/userContext";
import { useContext } from "react";

function ProfileBandInfo() {
  const { user, setUser } = useContext(UserContext);

  console.log(user);
  console.log(user.positionId);

  return (
    <div id="band_info_wrapper">
      <div id="band_info">
        {user.bandDataId === null ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            You are currently not enrolled in a band
          </div>
        ) : (
          <table id="band_info_table">
            <thead>
              <tr>
                <th>band</th>
                <th>position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.BandData.name}</td>
                <td>{user.position?.name || "No current position"}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProfileBandInfo;
