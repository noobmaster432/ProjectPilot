const AdminJS = require("adminjs");
const app = require("../index");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const projectModal=require("../models/projectModal")
const userModal=require("../models/userModal")

const authenticate = async (email, password) => {
  const user = await userModal.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password)) && user.isAdmin) {
    console.log(user);
    return Promise.resolve(user);
  }
  return;
};

// const admin = new AdminJS({
//   // ...other options...
  
// });


AdminJS.registerAdapter(AdminJSMongoose);

const admin = new AdminJS({
  databases: [mongoose],
  // resources: AdminJSMongoose.buildResources([DriverModel]),
  resources: [
    {
      resource: projectModal,
      options: {
        parent: {
          // name:'Drivers'
        },
      },
    },
    {
    resource: userModal,
    options: {
        parent: {
            // name:'Drivers'
        },
    },
    }
  ],
  branding: {
    companyName: "Project Pilot",
    logo: false,
  },
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  null,
  {
    // store: sessionStore,
    resave: true,
    saveUninitialized: true,
    secret: "sessionsecret",
    httpOnly:false
    // cookie: {
    //   httpOnly: "production",
    //   secure: "production",
    // },
  }
);

module.exports = { admin, adminRouter };
