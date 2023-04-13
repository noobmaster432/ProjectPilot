import ProjectCard from "../ProjectCard";

const ProfileProjects = ({ isPage }) => {

  const ProjectData = [
    {
      id: 1,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
    {
      id: 2,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
    {
      id: 3,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
    {
      id: 4,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
    {
      id: 5,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
    {
      id: 6,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      // image: "",
    },
  ];

  return (
    <div className="bg-zinc-800 shadow-lg px-10 py-6 rounded-sm">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        {isPage ? "Projects" : "Projects Contributed"}
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {ProjectData?.map(({ title, id, lead, createdAt, topics, image }) => (
          <ProjectCard
            key={id}
            title={title}
            lead={lead}
            createdAt={createdAt}
            topics={topics}
            image={
              image
                ? image
                : "https://marketplace-cdn.atlassian.com/files/57abce07-c88f-4480-926d-9fa250efa337?fileType=image&mode=full-fit"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileProjects;