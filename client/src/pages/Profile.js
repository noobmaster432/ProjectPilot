import React, { useEffect } from "react";
import MainProfile from "../components/profile/MainProfile";
import ProfileProjects from "../components/profile/ProfileProjects";
import Projects from "../components/profile/Projects";
import Github from "../components/profile/Github";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const profile=async()=>{
      const loginData=JSON.parse(localStorage.getItem('loginData'));
      const userID=loginData.other._id
      
      console.log(userID)
      const response=await axios.get(`http://localhost:5000/api/user/getuser/${userID}`)
      const user = response.data.findUser;
      setUser(user);

    }
  
    profile();
  }, [])
  
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
