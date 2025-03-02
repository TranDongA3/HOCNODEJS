const bcrypt = require("bcryptjs");
const db = require("../models/index");
const user = require("../models/user");
const { raw } = require("body-parser");
const { where } = require("sequelize");

// Hàm băm mật khẩu
const hashUserPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw error;
  }
};

// Hàm tạo user mới
const createNewUser = async (data) => {
  try {
    let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    await db.User.create({
      email: data.email,
      password: hashPasswordFromBcrypt,
      firstName: data.firstname,
      lastName: data.lastname,
      address: data.address,
      phone: data.phonenumber, // Sửa lại đúng tên
      gender: data.sex === "male" ? 1 : 0, // Chuyển thành số đúng với DB
      roleid: data.role, // Đúng tên trường trong DB
    });
    return "Tạo user thành công!";
  } catch (error) {
    throw error;
  }
};
let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
let getUserByID = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userID },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.firstName = data.firstname;
        user.lastName = data.lastname;
        console.log(data.firstname);
        await user.save();
        let allUsers = await db.User.findAll();
        resolve(allUsers);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUserByID = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
       await db.User.destroy({
        where: { id: userId },
      });
      
        let allUsers = await db.User.findAll();
        resolve(allUsers);
      
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserByID: getUserByID,
  updateUserData: updateUserData,
  deleteUserByID: deleteUserByID,
};
