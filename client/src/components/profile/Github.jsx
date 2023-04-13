import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="bg-zinc-800 shadow-lg px-10 py-6 rounded-sm mt-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8">
        Your Github Contributions
      </h2>
      <div className="flex items-center justify-center bg-transparent">
        <GitHubCalendar username="noobmaster432" blockSize={14} colorScheme='light' />
      </div>
    </div>
  );
}

export default Github