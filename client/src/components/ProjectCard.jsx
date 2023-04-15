import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, id, lead, createdAt, topics, image, gitHubRepoLink }) => {
  return (
    <div className="bg-zinc-900 pb-4 sm:pb-8 rounded-xl shadow-md">
      <img
        src={
          image ||
          "https://marketplace-cdn.atlassian.com/files/57abce07-c88f-4480-926d-9fa250efa337?fileType=image&mode=full-fit"
        }
        alt={title}
        className="w-full rounded-t-xl"
      />
      <p className="mt-4 mx-5 text-lg font-semibold font-body">{title}</p>
      <div className="mx-5 flex flex-wrap gap-4 my-4">
        {topics?.map((topic) => (
          <div className="text-[10px] text-center mx-1">{topic}</div>
        ))}
      </div>

      <div className="flex flex-row justify-between mt-8 mx-5 mb-4">
        <div className="text-center text-xs">
          <p className="text-gray-200 font-light">Started on</p>
          <div>{createdAt.slice(0, 10)}</div>
        </div>
        <div className="text-center text-xs">
          <p className="text-gray-200 font-light">Lead by</p>
          <div>{lead}</div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4">
        <Link to={gitHubRepoLink}>
          <BsGithub className="text-3xl mx-2 mt-1 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
        </Link>
        <Link to={`/projects/${id}`}>
          <button className="inline-flex items-center bg-blue-600 ml-4 px-4 py-1 rounded-sm mt-2 hover:opacity-90">
            View <BsArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
