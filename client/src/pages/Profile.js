import React, { useEffect } from "react";
import MainProfile from "../components/profile/MainProfile";
import ProfileProjects from "../components/profile/ProfileProjects";
import Projects from "../components/profile/Projects";
import Github from "../components/profile/Github";
import useUserStore from "../hooks/useUserStore";

const Profile = () => {
  const { user, login } = useUserStore();

  useEffect(() => {
    login();
  }, [login]);
  
  return (
    <div className="px-24 py-8">
      {console.log(user)}
      <MainProfile user={user} />
      <Github prof={user?.gitHub.slice(19)} />
      <ProfileProjects project={user?.projectsCreated} />
      <Projects />
    </div>
  );
};

export default Profile;
