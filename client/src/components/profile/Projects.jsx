import useCreateModal from "../../hooks/useCreateModal";
import ProjectCard from "../ProjectCard";
import { IoAddOutline } from "react-icons/io5";

const ProfileProjects = ({ isPage }) => {
  const createModal = useCreateModal();

  const ProjectData = [
    {
      id: 1,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
      id: 2,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
      id: 3,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
      id: 4,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
      id: 5,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
      id: 6,
      title: "FilmFiesta Movie Review Web App",
      lead: "Gyanendra",
      createdAt: "30/01/23",
      topics: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
  ];

  const add = () => {
    createModal.onOpen();
  }

  return (
    <div
      className={`bg-zinc-800 shadow-lg py-6 rounded-sm ${
        isPage ? "px-24" : "px-10"
      }`}
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-xl md:text-2xl font-bold">
          {isPage ? "Projects" : "Projects Contributed"}
        </h1>
        {isPage && (
          <button
            className="inline-flex mt-0 items-center bg-blue-600 hover:opacity-90 px-4 py-1 rounded-sm"
            onClick={add}
          >
            <IoAddOutline className="mr-2 text-white font-extrabold" />
            Create
          </button>
        )}
      </div>
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
