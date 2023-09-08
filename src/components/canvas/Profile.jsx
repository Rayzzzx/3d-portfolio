import React from "react";
import { head } from "../../assets";

const Profile = () => {
  return (
    <div className="float-right">
      <img
        className="object-cover h-[500px] w-[500px] mt-16 mr-17"
        src={head}
        alt="profile"
      />
    </div>
  );
};

export default Profile;
