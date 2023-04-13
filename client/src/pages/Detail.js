import Main from "../components/detail/Main";
import Side from "../components/detail/Side";

const Detail = () => {

  const Project = {
    id: 1,
    title: "FilmFiesta | A movie review Web Application",
    description:
      "A movie review web application that allows users to search for movies and add them to their watchlist. Users can also write reviews for movies and rate them. The application is built using React, Node.js, Express, MongoDB, and Tailwind CSS.",
    image:
      "https://user-images.githubusercontent.com/103204431/231871074-1246f131-c688-4f1b-b53f-d6dd92546a2b.png",
    github: "https://github.com/noobmaster432/FilmFiesta",
    website: "https://film-fiesta.vercel.app",
    createdAt: "15/04/2023",
    topics: ["React", "Node", "Express", "MongoDB", "Material UI"],
    license: "MIT",
    issues: "2",
    stars: "6",
    forks: "10",
    totalContributors: "53",
    lead: "Gyanendra",
    totalActivity: "378",
    visibility: "Public",
    pullRequests: "3",
    languages: [
      {
        name: "JavaScript",
        color: "#f1e05a",
        percentage: 93,
      },
      {
        name: "CSS",
        color: "#563d7c",
        percentage: 7,
      }
    ]
  };

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold">{Project.title}</h1>
      <div className="flex gap-2 text-gray-500 text-base">
        <p>{Project.visibility}</p>
        <p className="font-bold"> - </p>
        <p>Published on {Project.createdAt}</p>
      </div>
      <div className="h-[1px] bg-slate-700 mt-4" />
      <div className="flex mt-8 mx-4">
        <Main Project={Project} />
        <Side Project={Project} />
      </div>
    </div>
  );
}

export default Detail