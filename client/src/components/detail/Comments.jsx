import { useState,useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";

// const comments = [
//   {
//     id: 1,
//     name: "Yash Raj",
//     date: "Apr 15 2023",
//     comment:
//       "Overall was a great project, but found some bugs and thus wanna contribute to it!",
//   },
//   {
//     id: 2,
//     name: "Sachin Kumar",
//     date: "Apr 16 2023",
//     comment:
//       "Did a lot of effort in finding bugs and collaborating to it but still the code isn't merged.",
//   },
//   {
//     id: 3,
//     name: "Ankur",
//     date: "Apr 17 2023",
//     comment: "I am a beginner and I want to contribute to this project.",
//   },
// ];

const Comments = ({ project }) => {
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
    <div className="bg-zinc-800 shadow-lg rounded-sm mt-6 p-6 mb-8">
      <h1 className="text-3xl font-semibold">Discussion</h1>
      <div className="bg-gray-400 h-[1px] mb-10 mt-2" />
      <div>
        {comments?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
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
