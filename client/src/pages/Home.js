import { useState } from "react";
import Kanban from "../components/Kanban/Kanban";
import Calender from "../components/calender/calender";

const category = ["Kanban", "Calender", "Discussion Forum"];

const Home = () => {
  const [currCategory, setCurrCategory] = useState(0);
  return (
    <div>
      <div className="mt-4 flex">
        <div className="left-0 h-full sticky top-24 overflow-hidden flex flex-col items-start pt-4 gap-4 w-1/6">
          {category.map((item, index) => (
            <div
              key={index}
              className={`sm:text-xl px-4 py-2 cursor-pointer ${
                currCategory !== index && "text-zinc-400"
              } ${
                currCategory === index &&
                "text-blue-600 bg-[#0b5be552] w-full border-l-2 border-blue-600"
              }`}
              onClick={() => setCurrCategory(index)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-20 w-5/6">
          {currCategory === 0 && <Kanban />}
          {currCategory === 1 && <Calender />}
          {currCategory === 2 && <Kanban />}
        </div>
      </div>
    </div>
  );
};

export default Home;
