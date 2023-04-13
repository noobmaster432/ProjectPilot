import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-zinc-800 via-zinc-900 to-zinc-950 shadow-md py-8 px-4 bottom-0">
      <p className="font-tag text-3xl text-center">
        Empower your team, streamline your projects !!!
      </p>
      <div className="flex justify-between">
        <div>
          <p className="text-xl">All rights reserved</p>
          <p>© 2023 ProjectPilot.</p>
        </div>
        <div className="flex items-center mt-6">
          <BsInstagram className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
          <BsLinkedin className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
          <BsTwitter className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
