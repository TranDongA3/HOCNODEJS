const express = require("express");
const homeController=require("../controllers/homeController");
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/dong",(req,res)=>{
        return res.send("Quay lai di khong co gi dau")
    });
    router.get("/about",homeController.getAboutPage);

    return app.use("/", router);
};

module.exports=initWebRoute; 
