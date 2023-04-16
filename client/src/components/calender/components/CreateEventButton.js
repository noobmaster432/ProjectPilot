import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { AiOutlinePlus } from "react-icons/ai";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
      console.log("Clicked")
      setShowEventModal(true)
      }}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <AiOutlinePlus className="w-6 h-6" />
      <span className="px-3"> Create</span>
    </button>
  );
}
