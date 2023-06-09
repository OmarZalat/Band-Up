import MyBandMember from "./myBandMember";
import { useState } from "react";

function MyBandMembersTab({ member }) {
  console.log(member);
  return (
    <>
      <div id="band_members_wrapper">
        <div id="band_members_card">
          <h2>Band Members</h2>
          {member &&
            member.map((m) => (
              <MyBandMember
                FirstName={m.FName}
                LastName={m.LName}
                imageURL={m.image}
                Position={m.position.name}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default MyBandMembersTab;
