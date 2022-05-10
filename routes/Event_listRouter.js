const Router = require("express").Router();
const controllers = require("../controllers/Event_listController");

Router.get("/recent", controllers.getAllEvent_Lists);

module.exports = Router;