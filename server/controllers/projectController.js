const projectDB = require("../models/projectModal")
const userDB = require("../models/userModal")
const kanbanDB = require("../models/kanbanModal")
const asyncHandler = require("express-async-handler")
const cloudinary = require("../utils/cloudinary")
require('dotenv').config();
const axios = require("axios")

const colorArray = [];

const createProject = asyncHandler(async (req, res) => {
    const { title, gitHubRepoLink, createdBy, bio } = req.body;
    console.log(req.body);
    if (!title || !gitHubRepoLink || !createdBy || !req.file || !bio) {
        res.status(500)
        throw new Error("Please submit the details properly")
    }
    else {
        let uploadedFile;
        let imageUrl = '';
        if (req.file) {

            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                resource_type: "image",
                folder: 'Project Pilot'
            })
            if (!uploadedFile) {
                res.status(500)
                throw new Error("Error in uploading file")
            }
            else {
                imageUrl = uploadedFile.secure_url;
            }

        }
        const dataArr = gitHubRepoLink.split("/");
        const repoURL = `https://api.github.com/repos/${dataArr[3]}/${dataArr[4]}`
        console.log(repoURL)
        let repoDetails = await axios.get(repoURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        repoDetails = repoDetails.data;
        console.log(repoDetails)
        const hostedLink = repoDetails.homepage;
        const eventUrl = repoDetails.events_url;
        console.log(eventUrl)
        let eventDetails = await axios.get(eventUrl, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        eventDetails = eventDetails.data;
        const totalActivity = eventDetails.length
        const repoCreatedAt = repoDetails.created_at;
        const license = repoDetails.license == undefined ? {} : repoDetails.license;
        const visibility = repoDetails.visibility;
        const forks = repoDetails.forks;
        const issues = repoDetails.open_issues;
        const pullDeatail = repoDetails.pulls_url;
        const pullURL = pullDeatail.slice(0, pullDeatail.length - 9)
        let prDetails = await axios.get(pullURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        // console.log(pullDetails);
        prDetails = prDetails.data;
        const pullRequests = prDetails.length;
        let contributorsDetail = await axios.get(repoDetails.contributors_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        contributorsDetail = contributorsDetail.data;
        const contributors = contributorsDetail.length;
        let languageDetail = await axios.get(repoDetails.languages_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        languageDetail = languageDetail.data;
        // console.log(languageDetail)
        var arr = [];
        var sum = 0
        for (let value of Object.values(languageDetail)) {
            sum = sum + value;
        }
        for (let value of Object.entries(languageDetail)) {
            // console.log(value) 
            var ob = {};
            ob.language = value[0];
            ob.percent = (value[1] / sum) * 100;
            arr.push(ob);
        }

        arr.map((e) => {
            var color = Math.floor(Math.random() * 16777215).toString(16);
            while (colorArray.includes(color)) {
                color = Math.floor(Math.random() * 16777215).toString(16);
            }
            color = '#' + color;
            colorArray.push(color);
            e.color = color;
        })
        // console.log(arr)

        const stars = repoDetails.stargazers_count
        const tags = repoDetails.topics;
        const newKanban = await kanbanDB.create({})
        const newProject = new projectDB({
            title: title,
            gitHubRepoLink: gitHubRepoLink,
            bio: bio,
            displayImage: imageUrl,
            createdBy: createdBy,
            hostedLink: hostedLink,
            totalActivity: totalActivity,
            repoCreatedAt: repoCreatedAt,
            license: license,
            visibility: visibility,
            forks: forks,
            issues: issues,
            language: arr,
            pullRequests: pullRequests,
            tags: tags,
            contributors: contributors,
            stars: stars,
            kanban: newKanban._id

        })
        console.log(newProject);
        const savedProject = await newProject.save();
        if (savedProject) {
            const userUpdate = await userDB.findByIdAndUpdate({ _id: createdBy }, {
                $push: { projectsCreated: savedProject._id }
            }, { new: true })

            res.status(200).json({ message: "Successfully saved the project", savedProject })
        }
        else {
            res.status(500)
            throw new Error("Error in saving project");
        }
    }
})
const getAllProject = asyncHandler(async (req, res) => {
    const projects = await projectDB.find().populate('createdBy');
    if (projects) {

        res.status(200).json({ message: "Projects found successfully", projects })
    }
    else {
        res.status(400)
        throw new Error("Error in finding projects")
    }
})

const getParticularProject = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const project = await projectDB.findById({ _id: id }).populate('createdBy').populate('kanban');
    var updatedProject
    const timeDiff = ((new Date(Date.now()) - project.updatedAt) / 1440000)
    console.log(timeDiff)
    if (timeDiff > 24) {
        const dataArr = project.gitHubRepoLink.split("/");
        const repoURL = `https://api.github.com/repos/${dataArr[3]}/${dataArr[4]}`
        console.log(repoURL)
        let repoDetails = await axios.get(repoURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        repoDetails = repoDetails.data;
        console.log(repoDetails)
        const hostedLink = repoDetails.homepage;
        const eventUrl = repoDetails.events_url;
        console.log(eventUrl)
        let eventDetails = await axios.get(eventUrl, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        eventDetails = eventDetails.data;
        const totalActivity = eventDetails.length
        const license = repoDetails.license == undefined ? {} : repoDetails.license;
        const visibility = repoDetails.visibility;
        const forks = repoDetails.forks;
        const issues = repoDetails.open_issues;
        const pullDeatail = repoDetails.pulls_url;
        const pullURL = pullDeatail.slice(0, pullDeatail.length - 9)
        let prDetails = await axios.get(pullURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        // console.log(pullDetails);
        prDetails = prDetails.data;
        const pullRequests = prDetails.length;
        let contributorsDetail = await axios.get(repoDetails.contributors_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        contributorsDetail = contributorsDetail.data;
        const contributors = contributorsDetail.length;
        let languageDetail = await axios.get(repoDetails.languages_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        languageDetail = languageDetail.data;
        // console.log(languageDetail)
        var arr = [];
        var sum = 0
        for (let value of Object.values(languageDetail)) {
            sum = sum + value;
        }
        for (let value of Object.entries(languageDetail)) {
            // console.log(value) 
            var ob = {};
            ob.language = value[0];
            ob.percent = (value[1] / sum) * 100;
            arr.push(ob);
        }

        arr.map((e) => {
            var color = Math.floor(Math.random() * 16777215).toString(16);
            while (colorArray.includes(color)) {
                color = Math.floor(Math.random() * 16777215).toString(16);
            }
            color = '#' + color;
            colorArray.push(color);
            e.color = color;
        })
        // console.log(arr)

        const stars = repoDetails.stargazers_count
        const tags = repoDetails.topics;
        const updateData = {};
        updateData.tags = tags
        updateData.stars = stars
        updateData.contributors = contributors
        updateData.pullRequests = pullRequests
        updateData.language = arr
        updateData.issues = issues
        updateData.forks = forks
        updateData.visibility = visibility
        updateData.license = license
        updateData.totalActivity = totalActivity
        updateData.hostedLink = hostedLink
        updatedProject = await projectDB.findByIdAndUpdate({ _id: id }, updateData, { new: true })

    }
    if (updatedProject) {
        console.log(updatedProject)
        res.status(200).json({ message: "Successfully got the project", updatedProject })
    }
    else if (project) {
        res.status(200).json({ message: "Successfully got the project", project })

    }
    else {
        res.status(404)
        throw new Error("Project not found");

    }
})

const contributeToProject = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;
    const updatedUser = await userDB.findByIdAndUpdate({ _id: id }, {
        $push: { projectsContributed: id }
    }, { new: true })
    if (updatedUser) {
        res.status(200).json({ message: "Contributing to the project" });
    }
    else {
        res.status(500)
        throw new Error("Error in contributing to project");
    }

})

const updateProject = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const findProject = await projectDB.findById({ _id: id })
    if (findProject) {
        const { bio, title } = req.body;
        const updateData = {};
        if (bio) {
            updateData.bio = bio;
        }
        if (title) {
            updateData.title = title
        }
        let uploadedFile;
        let imageUrl = '';
        if (req.file) {

            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                resource_type: "image",
                folder: 'Project Pilot'
            })
            if (!uploadedFile) {
                res.status(500)
                throw new Error("Error in uploading file")
            }
            else {
                imageUrl = uploadedFile.secure_url;
            }
            updateData.displayImage = imageUrl
        }
        const dataArr = gitHubRepoLink.split("/");
        const repoURL = `https://api.github.com/repos/${dataArr[3]}/${dataArr[4]}`
        console.log(repoURL)
        let repoDetails = await axios.get(repoURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        repoDetails = repoDetails.data;
        console.log(repoDetails)
        const hostedLink = repoDetails.homepage;
        const eventUrl = repoDetails.events_url;
        console.log(eventUrl)
        let eventDetails = await axios.get(eventUrl, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        eventDetails = eventDetails.data;
        const totalActivity = eventDetails.length
        const repoCreatedAt = repoDetails.created_at;
        const license = repoDetails.license == undefined ? {} : repoDetails.license;
        const visibility = repoDetails.visibility;
        const forks = repoDetails.forks;
        const issues = repoDetails.open_issues;
        const pullDeatail = repoDetails.pulls_url;
        const pullURL = pullDeatail.slice(0, pullDeatail.length - 9)
        let prDetails = await axios.get(pullURL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        // console.log(pullDetails);
        prDetails = prDetails.data;
        const pullRequests = prDetails.length;
        let contributorsDetail = await axios.get(repoDetails.contributors_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        });
        contributorsDetail = contributorsDetail.data;
        const contributors = contributorsDetail.length;
        let languageDetail = await axios.get(repoDetails.languages_url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUBAUTH}`,
                "Content-Type": "application/json",
            }
        })
        languageDetail = languageDetail.data;
        // console.log(languageDetail)
        var arr = [];
        var sum = 0
        for (let value of Object.values(languageDetail)) {
            sum = sum + value;
        }
        for (let value of Object.entries(languageDetail)) {
            // console.log(value) 
            var ob = {};
            ob.language = value[0];
            ob.percent = (value[1] / sum) * 100;
            arr.push(ob);
        }

        arr.map((e) => {
            var color = Math.floor(Math.random() * 16777215).toString(16);
            while (colorArray.includes(color)) {
                color = Math.floor(Math.random() * 16777215).toString(16);
            }
            color = '#' + color;
            colorArray.push(color);
            e.color = color;
        })
        // console.log(arr)

        const stars = repoDetails.stargazers_count
        const tags = repoDetails.topics;
        updateData.tags = tags
        updateData.stars = stars
        updateData.contributors = contributors
        updateData.pullRequests = pullRequests
        updateData.language = arr
        updateData.issues = issues
        updateData.forks = forks
        updateData.visibility = visibility
        updateData.license = license
        updateData.totalActivity = totalActivity
        updateData.hostedLink = hostedLink
        const updatedProject = await projectDB.findByIdAndUpdate({ _id: id }, updateData, { new: true });
        if (updatedProject) {
            res.status(200).json({ message: "Updated project successfully", updatedProject })
        }
        else {
            res.status(500)
            throw new Error("Error in updating project");
        }

    }
    else {
        res.status(404)
        throw new Error("No such project found");
    }

})
const deleteproject = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const userId = req.body.id;
    const findProject = await projectDB.findById({ _id: id });
    if (findProject) {
        if (findProject.userId == userId) {
            const deletedProject = await projectDB.findByIdAndDelete({ _id: id })
            const updatedUser = await userDB.findByIdAndUpdate({ _id: userId }, {
                $pop: { projectsCreated: deletedProject._id }
            })
            if (deletedProject && updatedUser) {
                res.status(200).json({ message: "Deleted project successfully", deletedProject });
            }
            else {
                res.status(400)
                throw new Error("Error in deleting project");
            }
        }
        else {
            res.status(400)
            throw new Error("User not verified for deleting ");
        }
    }
    else {
        res.status(400)
        throw new Error("Error in finding project");
    }
})

module.exports = { createProject, getAllProject, getParticularProject, updateProject, deleteproject, contributeToProject }
