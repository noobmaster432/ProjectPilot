// import photo from "../profile/images/default-avatar.png";

const Comment = ({ comment }) => {
  return (
    <div className="p-2 border border-zinc-600 rounded-md mb-4">
      <div className="flex justify-start gap-2 items-center my-1">
        <img src={comment?.img} className="rounded-full w-8 h-8" alt="" />
        <h1 className="mb-1 text-lg mr-1">{comment?.name}</h1>
        <h1 className="text-sm font-light font-sans text-slate-300">
          on {comment?.createdAt?.slice(0,10)}
        </h1>
      </div>
      <div className="flex items-center">
        <div></div>
        <p className="font-serif italic pl-10">
          {comment?.suggestion}
        </p>
      </div>
    </div>
  );
};

export default Comment;
