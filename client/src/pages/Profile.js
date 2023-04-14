import React from "react";
import MainProfile from "../components/profile/MainProfile";
import ProfileProjects from "../components/profile/ProfileProjects";
import Projects from "../components/profile/Projects";
import Github from "../components/profile/Github";

const Profile = () => {
  return (
    <div className="px-24 py-8">
      <MainProfile />
      <Github />
      <ProfileProjects />
      <Projects />
    </div>
  );
};

export default Profile;
