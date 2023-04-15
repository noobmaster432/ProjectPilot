const userDB = require("../models/userModal")
const tokenDB = require("../models/token")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const cloudinary = require('../utils/cloudinary')
const generateToken = require('../utils/jwt');
const sendEmail = require("../utils/sendMail");
const crypto = require("crypto")
require('dotenv').config()


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, github } = req.body;
    if (!name || !email || !password || !github) {
        res.status(400)
        throw new Error("Please enter all the details properly")  
    }
    else {
        const findUser = await userDB.findOne({ email: email });
        if (findUser) {
            res.status(400)
            throw new Error("User already exists");
        }
        else {
            const salt = await bcrypt.genSalt(10);
            let fileData = {};
            let uploadedFile = '';
            
            const githubURL='https://github.com/'+github;
            const newUser = new userDB({
                name: name,
                email: email,
                password: await bcrypt.hash(password, salt),
                gitHub: githubURL

            })
            const savedUser = await newUser.save();
            if (savedUser) {
                const otp = Math.floor(Math.random() * 1000000);
                const hashedOTP = crypto.createHash("sha256").update(otp.toString()).digest("hex")
                const findToken = await tokenDB.findOne({ email: savedUser.email });
                if (findToken) {
                    await tokenDB.deleteOne({ email: savedUser.email });
                }
                const newToken = new tokenDB({
                    email: savedUser.email,
                    token: hashedOTP,
                    createdAt: Date.now(),
                    expiresAt: Date.now() + 30 * (60 * 1000)
                })
                const savedToken = await newToken.save();
                const message =
                    `<h1>Thank you for signing up on project pilot </h1>
                    <h4 style='font-size:24px;'>Here is your otp for email verification. </h4>
                    <h2 style="text-align:center;"> ${otp}</h2>
                    `;
                const subject = "OTP for email verification"
                const send_to = email
                const sent_from = process.env.EMAIL;

                await sendEmail(subject, message, send_to, sent_from);
                if (savedToken) {
                    res.status(200).json({ message: "Saved Successfully. Please verify otp" })
                }
                else {
                    res.status(500)
                    throw new Error("Error in generating otp");
                }
            }
            else {
                res.status(500)
                throw new Error("Error in saving user");
            }

        }
    }
}
)
const resendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const findToken = await tokenDB.findOne({ email: email });
    if (findToken) {
        await tokenDB.deleteOne({ email: email });
    }
    const otp = Math.floor(Math.random() * 1000000);
    const hashedOTP = crypto.createHash("sha256").update(otp.toString()).digest("hex")
    const newToken = new tokenDB({
        email: email,
        token: hashedOTP,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * (60 * 1000)
    })
    const savedToken = await newToken.save();
    const message =
        `<h1>Thank you for signing up on project pilot </h1>
                    <h4 style='font-size:24px;'>Your new otp for email verification. </h4>
                    <h2 style="text-align:center;"> ${otp}</h2>
                    `;
    const subject = "OTP for email verification"
    const send_to = email
    const sent_from = process.env.EMAIL;
    await sendEmail(subject, message, send_to, sent_from);
    if (savedToken) {
        res.status(200).json({ message: "Saved Successfully. Please verify otp" })
    }
    else {
        res.status(500)
        throw new Error("Error in generating otp");
    }



})
const verifyOtp = asyncHandler(async (req, res) => {
    const { otp, email } = req.body;
    console.log(req.body);
    if (!otp) {
        res.status(500)
        throw new Error("Please enter the details properly");

    }
    else {
        const hashedOTP = crypto.createHash("sha256").update(otp.toString()).digest("hex")
        const findToken = await tokenDB.findOne({ token: hashedOTP });

        if (findToken) {
            const userUpdate = await userDB.findOneAndUpdate({ email: email }, {
                isVerified: true
            }, { new: true });
            if (userUpdate) {
                await tokenDB.findOneAndDelete({ token: hashedOTP });

                res.status(200).json({ message: "User Verified Successfully" })
 
            }
            else {
                res.status(500)
                throw new Error("Error in updating state of the user")
            }
        }
        else {
            res.status(400)
            throw new Error("Token expired or invalid")
        }
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter all the details properly")
    }
    else {
        const findUser = await userDB.findOne({ email: email });
        if (findUser) {
            const comparePassword = await bcrypt.compare(password, findUser.password);
            if (comparePassword) {
                const token = generateToken(findUser._id);
                const { password, createdAt, updatedAt, ...other } = findUser._doc;
                res.status(200).json({ message: "Login successful", other, token: token });

            }
            else {
                res.status(404)
                throw new Error("Password incorrect");
            }

        }
        else {
            res.status(404)
            throw new Error("User not found. Please register");
        }

    }
})

module.exports = { registerUser, loginUser, verifyOtp, resendOTP };