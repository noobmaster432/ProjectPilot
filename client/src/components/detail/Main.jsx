const Main = ({ Project }) => {
  return (
    <div className="w-4/6 pr-8">
      <img
        src={
          Project.image ||
          "https://marketplace-cdn.atlassian.com/files/57abce07-c88f-4480-926d-9fa250efa337?fileType=image&mode=full-fit"
        }
        alt={Project.title}
        className="w-full"
      />
      <div className="flex gap-3 my-4">
        {Project.topics?.map((topic) => (
          <div className="text-sm text-center mx-1 px-3 py-1 rounded-lg bg-zinc-700 shadow-md hover:opacity-90 cursor-pointer">
            {topic}
          </div>
        ))}
      </div>
      <p className="text-lg font-body mt-8">{Project.description}</p>
    </div>
  );
}

export default Main