const projectDB = require("../models/projectModal")
const asyncHandler = require("express-async-handler")
const cloudinary = require("../utils/cloudinary")
require('dotenv').config();

const createProject = asyncHandler(async (req, res) => {
    const { title, gitHubRepoLink, createdBy } = req.body;
    if (!title || !gitHubRepoLink || !createdBy || !req.file) {
        res.status(500)
        throw new Error("Please submit the details properly")
    }
    else {
        let fileData = {};
        let uploadedFile = "";
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "image",
            folder: 'Project Pilot'
        })
        if (!uploadedFile) {
            res.status(500)
            throw new Error("Error in uploading file");
        }
        else {
            // console.log(uploadedFile)
            fileData = {
                fileName: req.file.originalname,
                filePath: uploadedFile.secure_url,
                fileType: req.file.mimetype,
            }
        }

        const repoDetails = await (await fetch('https://api.github.com/repos/noobmaster432/yaatra', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            },
        })).json()
        const hostedLink = repoDetails.homepage;
        const eventUrl = repoDetails.events_url;
        console.log(eventUrl)
        const eventDetails = await (await fetch(eventUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            },
        })).json()
        const totalActivity = eventDetails.length
        const repoCreatedAt = repoDetails.created_at;
        const license = repoDetails.license == undefined ? {} : repoDetails.license;
        const visibility = repoDetails.visibility;
        const forks = repoDetails.forks;
        const issues = repoDetails.open_issues;
        const pullDeatail = repoDetails.pulls_url;
        const pullURL = pullDeatail.slice(0, pullDeatail.length - 9)
        // console.log(pullURL)
        const prDetails = await (await fetch(pullURL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            },
        })).json()
        // console.log(pullDetails);
        const pullRequests = prDetails.length;
        // console.log(prDetails.length)

        const contributorsDetail = await (await fetch(repoDetails.contributors_url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            },
        })).json()
        const contributors = contributorsDetail.length;
        // console.log(contributorsDetail)
        /*Language details here  */
        const languageDetail = await (await fetch(repoDetails.languages_url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            },
        })).json()
        // var larr=[];
        // var ob={};
        // for (let value of Object.keys(languageDetail)) {
        //     console.log(value);
        //     ob.language=value;
        //     larr.push(ob);
        // }
        // var sum=0;
        // //to get keys
        // for (let value of Object.values(languageDetail)) {
        //     sum=sum+value;
        // }
        // console.log(sum)
        // var parr=[];
        // // for (let value of Object.values(languageDetail)) {
        // //     console.log(value);
        // //     const percent=(value/sum)*100;
        // //     ob.percent=percent;
        // //     larr.push(ob);

        // // }
        // console.log(larr)
        /*Language details end here */

        const tags = repoDetails.topics;
        const newProject = new projectDB({
            title: title,
            gitHubRepoLink: gitHubRepoLink,
            displayImage: fileData,
            createdBy: createdBy,
            hostedLink: hostedLink,
            totalActivity: totalActivity,
            repoCreatedAt: repoCreatedAt,
            license: license,
            visibility: visibility,
            forks: forks,
            issues: issues,
            pullRequests: pullRequests,
            tags: tags
        })
        const savedProject = await newProject.save();
        if (savedProject) {
            res.status(200).json({ message: "Successfully saved the project", savedProject })
        }
        else {
            res.status(500)
            throw new Error("Error in saving project");
        }
    }
})


module.exports = { createProject }