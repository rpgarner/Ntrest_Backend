const Router = require("express").Router();
const controllers = require("../controllers/EventController");
// const middleware = require('../middleware')

Router.get("/recent", controllers.getAllEvents);
Router.get("/:eventId", controllers.GetEventDetails);
Router.post(
    "/:user_id",  controllers.newEvent);
//     // middleware.stripToken,
//     // middleware.verifyToken, 
//     // controllers.CreatePost);
Router.put("/:event_id",  controllers.UpdateEvent);
//     // middleware.stripToken,
//     // middleware.verifyToken, 
//     // controllers.UpdatePost);
Router.delete("/:event_id",  controllers.DeleteEvent);
//     // middleware.stripToken,
//     // middleware.verifyToken, 
//     // controllers.DeletePost);

module.exports = Router;