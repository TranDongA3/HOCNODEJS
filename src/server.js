const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoute = require("./route/web");
const dotenv = require("dotenv");
const connectDB=require("./config/connectDB");


dotenv.config();
let app = express();

// Cấu hình nhận các tham số từ client lên server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Chạy các cấu hình
viewEngine(app);
initWebRoute(app);
connectDB(app);

// Bắt đầu chạy server
let port = process.env.PORT || 8069;
app.listen(port, () => {
    console.log("Back-end is running on port " + port);
});
