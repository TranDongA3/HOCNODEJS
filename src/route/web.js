const express = require("express");
const homeController = require("../controllers/homeController");
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/dong", (req, res) => {
    return res.send("Quay lai di khong co gi dau");
  });
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-user", homeController.editUser);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-user", homeController.deleteUser);
  return app.use("/", router);
};

module.exports = initWebRoute;
