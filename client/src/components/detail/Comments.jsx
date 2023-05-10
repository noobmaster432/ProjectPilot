import { useState,useEffect } from "react";
import Comment from "./Comment";
import useCommentStore from "../../hooks/useCommentStore";

const cmt = [
  {
    id: 1,
    name: "Yash Raj",
    createdAt: "2023-04-15",
    suggestion:
      "I'm really impressed with the progress we've made so far. The team has been working hard and it's showing!",
    img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sachin Kumar",
    createdAt: "2023-04-16",
    suggestion:
      "Great job on the design! The user interface looks sleek and intuitive. Can't wait to see it in action",
    img:"https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Ankur Kumar",
    createdAt: "2023-04-17",
    suggestion: "I think we should consider adding more features to make the project more robust. What do you all think?",
    img:"https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    name: "Rahul Singh",
    createdAt: "2023-04-17",
    suggestion: "Just a friendly reminder to everyone to update their progress in the project management tool. It helps us stay on track and avoid any delays.",
    img:"https://images.pexels.com/photos/3973335/pexels-photo-3973335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Himani Sharma",
    createdAt: "2023-04-17",
    suggestion: "Has anyone else encountered this bug? I've been trying to replicate it, but I can't seem to figure out what's causing it.",
    img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const Comments = ({ project, isPage }) => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const userID = loginData?.other?._id;

  const [comment, setComment] = useState("");
  const { comments, fetchComments, postComment } = useCommentStore();

  useEffect(() => {
    fetchComments(project?._id);
  }, [fetchComments, project?._id]);

  const handleClick = (e) => {
    e.preventDefault();
    postComment({suggestion: comment, userId: userID, projectId: project?._id});
    setComment("");
  };
  
  return (
    <div className={`bg-zinc-800 shadow-lg rounded-sm p-6 mb-8 ${isPage ? "h-fit -mt-20 mx-4" : "mt-6"}`}>
      <h1 className="text-3xl font-semibold">Discussion</h1>
      <div className="bg-gray-400 h-[1px] mb-10 mt-2" />
      <div>
        {comments?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
        {isPage && (
           cmt?.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))
        )}
      </div>
      <form onSubmit={handleClick}>
        <input
          onChange={(e) => {
            setComment(e.target.value);
          }}
          type="text"
          value={comment}
          placeholder="write a comment"
          className="bg-zinc-900 outline-none active:border-zinc-600 focus:border-zinc-600 border border-zinc-800 p-2 w-full rounded-md"
        />
        <button type="submit" className="mt-3 ml-1 hover:opacity-90 bg-green-700 px-2 py-1 rounded-md">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
