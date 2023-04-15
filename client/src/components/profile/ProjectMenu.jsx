import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import useEditModal from "../../hooks/useEditModal";

const ProjectMenu = ({ item }) => {
  const editModal = useEditModal();
  
  const edit = () => {
    editModal.onOpen();
    console.log("hi");
  }

  return (
    <div className="flex mb-8 items-center bg-zinc-900 p-8 rounded-lg">
      <img
        src={
          item?.displayImage ||
          "https://marketplace-cdn.atlassian.com/files/57abce07-c88f-4480-926d-9fa250efa337?fileType=image&mode=full-fit"
        }
        alt=""
        className="h-40 w-1/4 rounded-lg object-cover"
      />
      <div className="ml-8">
        <h2 className="font-medium font-serif text-2xl">{item?.title}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center mt-2 mb-4">
          {item?.tags.map((tag) => {
            return (
              <div className="bg-black rounded-md text-white px-2 py-1 text-xs m-0 font-light">
                {tag}
              </div>
            );
          })}
        </div>
        <p className="font-light">{item?.bio}</p>
        <div className="space-x-4">
          <button className="inline-flex items-center bg-blue-600 hover:opacity-90 px-4 py-1 rounded-sm mt-6" onClick={edit}>
            Edit <AiFillEdit className="ml-2" />
          </button>
          <Link to={`/projects/${item?._id}`}>
            <button className="inline-flex items-center bg-blue-600 hover:opacity-90 px-4 py-1 rounded-sm mt-6">
              View <BsArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectMenu;
