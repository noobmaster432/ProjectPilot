import { useState,useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";

const cmt = [
  {
    id: 1,
    name: "Yash Raj",
    createdAt: "2023-04-15",
    suggestion:
      "I'm really impressed with the progress we've made so far. The team has been working hard and it's showing!",
  },
  {
    id: 2,
    name: "Sachin Kumar",
    createdAt: "2023-04-16",
    suggestion:
      "Great job on the design! The user interface looks sleek and intuitive. Can't wait to see it in action",
  },
  {
    id: 3,
    name: "Ankur Kumar",
    createdAt: "2023-04-17",
    suggestion: "I think we should consider adding more features to make the project more robust. What do you all think?",
  },
  {
    id: 4,
    name: "Rahul Singh",
    createdAt: "2023-04-17",
    suggestion: "Just a friendly reminder to everyone to update their progress in the project management tool. It helps us stay on track and avoid any delays.",
  },
  {
    id: 5,
    name: "Himanshu Sharma",
    createdAt: "2023-04-17",
    suggestion: "Has anyone else encountered this bug? I've been trying to replicate it, but I can't seem to figure out what's causing it.",
  },
];

const Comments = ({ project, isPage }) => {
    console.log(project?._id);
    // const loginDetail=localStorage.getItem('loginDetail');
    // const userID=JSON.parse(loginDetail);
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const userID = loginData?.other?._id;

  const [comments, setComments] = useState([]);
  // to get all the comments of a project
  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/suggestion/getSuggestions/${project?._id}`);
      setComments(data);
    };
    getComments(); 
  }, [project?._id]);

  // console.log(comments);
  const [comment, setComment] = useState('');

  const handleClick = async(e) => {
    e.preventDefault();
    console.log("hello");
    try{
      const { data } = await axios.post(`http://localhost:5000/api/suggestion/addSuggestion`, {
        suggestion: comment,
        userId:userID,
        projectId:project?._id
      });
      console.log(data);
      setComments([...comments, data]);
      setComment('');
    }catch(err){
      console.log(err)
    }
  }
  
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
