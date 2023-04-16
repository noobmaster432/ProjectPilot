import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "Yash Raj",
        date: "Apr 15 2023",
        comment: "Overall was a great project, but found some bugs and thus wanna contribute to it!"
    },
    {
        id: 2,
        name: "Sachin Kumar",
        date: "Apr 16 2023",
        comment: "Did a lot of effort in finding bugs and collaborating to it but still the code isn't merged."
    },
    {
        id: 3,
        name: "Ankur",
        date: "Apr 17 2023",
        comment: "I am a beginner and I want to contribute to this project."
    }
]

const Comments = ({ project }) => {
  return (
    <div className="bg-zinc-800 shadow-lg rounded-sm mt-6 p-6 mb-8">
      <h1 className="text-3xl font-semibold">Discussion</h1>
      <div className="bg-gray-400 h-[1px] mb-10 mt-2" />
      <div>
        {comments?.map((comment) => (
            <Comment comment={comment} />
        ))}
      </div>
      <input type="text" placeholder="write a comment" className="bg-zinc-900 outline-none active:border-zinc-600 focus:border-zinc-600 border border-zinc-800 p-2 w-full rounded-md" />
      <button className="mt-3 ml-1 hover:opacity-90 bg-green-700 px-2 py-1 rounded-md">
        Comment
      </button>
    </div>
  );
};

export default Comments;
