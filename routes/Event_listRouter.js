const Router = require("express").Router();
const controllers = require("../controllers/Event_listController");

Router.get("/recent", controllers.getAllEvent_Lists);
Router.get("/:user_id", controllers.getAllevent_listByuserPk)
Router.post("/:user_id", controllers.CreateEvent_List)

module.exports = Router;