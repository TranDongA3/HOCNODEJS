const { where } = require("sequelize");
const db = require("../models/index");
const CRUDServices = require("../services/CRUDServices");
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("post CRUD");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDServices.getAllUser();
  console.log("---------------------");
  console.log(data);
  console.log("---------------------");

  res.render("display.ejs", {
    data: data,
  });
};

let editUser = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServices.getUserByID(userId);
    //check user data not dound
    return res.render("editCRUD.ejs", {
      userData: userData,
    });
  } else {
    return res.send("Fuck the user!");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDServices.updateUserData(data);
  return res.render("display.ejs", {
    data: allUsers,
  });
};
let deleteUser = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let allUser = await CRUDServices.deleteUserByID(userId);
    res.render("display.ejs", {
      data: allUser,
    });
  } else {
    console.log("Loi deleuser");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  editUser: editUser,
  deleteUser: deleteUser,
  putCRUD: putCRUD,
};
