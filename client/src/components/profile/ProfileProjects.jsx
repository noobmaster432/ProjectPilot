import React from "react";
import ProjectMenu from "./ProjectMenu";

const ProfileProjects = () => {

  const projectData = [
    {
      // img: banner1,
      title: "Buzznet | Tweeter Clone",
      tags: ["Next.js", "Prisma", "Typescript", "Tailwind CSS"],
      description:
        "Buzznet is a Twitter clone which offers features like authentication, notifications, image upload, and responsive layout. It also provides comments/replies, and likes system to engage with posts.",
    },
    {
      // img: banner2,
      title: "FilmFiesta | Movie Review Web App",
      tags: ["ReactJs", "Node", "Express", "MongoDB", "Material UI"],
      description:
        "FilmFiesta is a movie's review web application used for getting the list and details of various movies and series. It offers sign up/in, adding/removing favorites, giving reviews, search, and theme functionalities.",
    },
  ];
  
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 shadow-lg px-10 py-6 rounded-sm my-6">
      <h2 className="text-xl md:text-2xl font-bold text-white">
        Projects Created
      </h2>
      <div className="mt-6">
        {projectData.map((item) => {
          return <ProjectMenu item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileProjects;
