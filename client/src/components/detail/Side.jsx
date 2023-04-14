import { BsGit, BsActivity } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { AiOutlineStar, AiOutlinePullRequest } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import { GoIssueOpened } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import Chart from "./chart.png";
import Button from "../modals/Button";

const Side = ({ Project }) => {
  return (
    <div className="mt-2 ml-4 mb-4">
      <div className="repository pr-4">
        <p className="text-sm font-semibold font-sans text-slate-300">
          Repository
        </p>
        <div className="flex items-center gap-2 my-3">
          <BsGit className="text-base text-gray-200" />
          <a
            href={Project.github}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-slate-200"
          >
            {Project.github.slice(8)}
          </a>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-6 w-full" />

      <div className="homePage pr-4 mt-6">
        <p className="text-sm font-semibold font-sans text-slate-300">
          Home Page
        </p>
        <div className="flex items-center gap-2 my-3">
          <BiLink className="text-base text-gray-200" />
          <a
            href={Project.website}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-slate-200"
          >
            {Project.website.slice(8)}
          </a>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="activity pr-4 mt-6 flex">
        <div className="text w-1/2">
          <div className="flex items-center gap-2 my-1">
            <BsActivity className="text-base text-slate-100" />
            <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
              Total Activity
            </p>
          </div>
          <p className="text-lg font-medium text-slate-200">
            {Project.totalActivity}
          </p>
        </div>
        <div className="chart">
          <img src={Chart} alt="" className="h-16" />
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="lead createdAt pr-4 mt-6 flex">
        <div className="lead w-1/2">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Lead By
          </p>
          <a
            href={Project.github.slice(0, 32)}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium text-slate-200 pt-3"
          >
            {Project.lead}
          </a>
        </div>
        <div className="createdAt">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Created At
          </p>
          <p className="text-lg font-medium text-slate-200">
            {Project.createdAt}
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="version license pr-4 mt-6 flex">
        <div className="version w-1/2">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Visibility
          </p>
          <p className="text-lg font-medium text-slate-200">
            {Project.visibility}
          </p>
        </div>
        <div className="license">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            License
          </p>
          <p className="text-lg font-medium text-slate-200">
            {Project.license}
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="stars forks pr-4 mt-6 flex">
        <div className="stars w-1/2">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Stars
          </p>
          <div className="flex items-center gap-2 my-1">
            <AiOutlineStar className="text-base text-gray-200" />
            <p className="text-lg font-medium text-slate-200">
              {Project.stars}
            </p>
          </div>
        </div>
        <div className="forks">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Forks
          </p>
          <div className="flex items-center gap-2 my-1">
            <TbGitFork className="text-base text-gray-200" />
            <p className="text-lg font-medium text-slate-200">
              {Project.forks}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="issues pullRequest pr-4 mt-6 flex">
        <div className="issues w-1/2">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Issues
          </p>
          <div className="flex items-center gap-2 my-1">
            <GoIssueOpened className="text-base text-gray-200" />
            <p className="text-lg font-medium text-slate-200">
              {Project.issues}
            </p>
          </div>
        </div>
        <div className="pullRequests">
          <p className="text-sm font-semibold font-sans text-slate-300 pb-1">
            Pull Requests
          </p>
          <div className="flex items-center gap-2 my-1">
            <AiOutlinePullRequest className="text-base text-gray-200" />
            <p className="text-lg font-medium text-slate-200">
              {Project.pullRequests}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-slate-600 mt-4 w-full" />

      <div className="contributor pr-4 mt-6 mb-8">
        <p className="text-sm font-semibold font-sans text-slate-300">
          Total Contributors
        </p>
        <div className="flex items-center gap-2 my-3">
          <IoIosPeople className="text-3xl text-gray-200" />
          <p className="text-base font-medium text-slate-200">
            {Project.totalContributors}
          </p>
        </div>
      </div>

      <a href={Project.github} target="_blank" rel="noreferrer">
        <Button label="Contribute" fullWidth={true} outline={true} />
      </a>

      <div className="my-6">
        <Button label="Report" fullWidth={true} Report={true} />
      </div>
    </div>
  );
};

export default Side;
