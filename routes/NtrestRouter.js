const Router = require("express").Router();
const controllers = require("../controllers/NtrestController");
// const middleware = require('../middleware')

Router.get("/ntrest", controllers.GetAllNtrests);
Router.get("/:ntrestId", controllers.GetNtrestDetails);
Router.post("/:ntrest_id", controllers.CreateNtrest);
    // middleware.stripToken,
    // middleware.verifyToken, 
    // controllers.CreateNtrest);
Router.put("/:ntrest_id",  controllers.UpdateNtrest);
    // middleware.stripToken,
    // middleware.verifyToken, 
    // controllers.UpdateNtrest);
Router.delete("/:ntrest_id", controllers.DeleteNtrest);
    // middleware.stripToken,
    // middleware.verifyToken, 
    // controllers.DeleteNtrest);

module.exports = Router;