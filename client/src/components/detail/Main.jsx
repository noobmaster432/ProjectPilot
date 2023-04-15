const Main = ({ Project }) => {
  return (
    <div className="w-4/6 pr-8">
      <img
        src={
          Project?.displayImage ||
          "https://marketplace-cdn.atlassian.com/files/57abce07-c88f-4480-926d-9fa250efa337?fileType=image&mode=full-fit"
        }
        alt={Project?.title}
        className="w-full"
      />
      <div className="flex gap-x-3 gap-y-2 my-4 flex-wrap">
        {Project?.tags?.map((topic) => (
          <div className="text-sm text-center px-3 py-1 rounded-lg bg-zinc-700 shadow-md hover:opacity-90 cursor-pointer">
            {topic}
          </div>
        ))}
      </div>
      <p className="text-xl font-body mt-6">{Project?.bio}</p>
    </div>
  );
}

export default Main