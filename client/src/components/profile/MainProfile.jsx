import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import useEditModalP from "../../hooks/useEditModalP";
import { Link } from "react-router-dom";
import img from "./images/default-avatar.png";

const MainProfile = ({ user }) => {
  const editModal = useEditModalP();

  const edit = () => {
    editModal.onOpen();
    console.log("hi");
  };

  return (
    <div className="relative bg-zinc-800 px-12 py-6 rounded-sm flex justify-between items-start">
      <div className="h-full self-center pr-4">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={user?.image ? user?.image : img}
          alt=""
        />
      </div>
      <div className="max-w-[85%]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="font-semibold text-2xl">{user?.name}</h2>
            <p className="mt-2 ml-4 text-gray-400">@{user?.gitHub.slice(19)}</p>
          </div>
          <button
            className="inline-flex items-center bg-blue-600 hover:opacity-90 p-2 mb-2 rounded-full"
            onClick={edit}
          >
            <AiFillEdit className="" />
          </button>
        </div>
        <p className="mt-2 font-normal italic">{user?.bio}</p>
        <div className="flex justify-between">
          <div className="flex items-center mt-6">
            {user?.gitHub && (
              <Link to={user?.gitHub}>
                <BsGithub className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
              </Link>
            )}
            {user?.linkedIn && (
              <Link to={user?.linkedIn}>
                <BsLinkedin className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
              </Link>
            )}
            {user?.twitter && (
              <Link to={user?.twitter}>
                <BsTwitter className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
