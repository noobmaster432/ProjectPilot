import React from 'react'
// import GitHubCalendar from "react-github-calendar";
import git from "./images/git.png";

const Github = ({ prof }) => {
  return (
    <div className="bg-zinc-800 shadow-lg px-10 py-6 rounded-sm mt-6">
      <h2 className="text-xl md:text-2xl font-bold text-white">
        Your Github Contributions
      </h2>
      <div className="flex items-center justify-center bg-transparent">
        {/* <GitHubCalendar username={prof} blockSize={14} colorScheme='dark' /> */}
        <img src={git} alt="" />
      </div>
    </div>
  );
}

export default Github