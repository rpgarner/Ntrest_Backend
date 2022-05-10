const Router = require("express").Router();
const controllers = require("../controllers/NtrestController");
const middleware = require("../middleware");

Router.get("/ntrest", controllers.GetAllNtrests);
Router.get("/:ntrestId", controllers.GetNtrestDetails);
Router.post(
  "/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controllers.CreateNtrest
);
Router.put(
  "/:ntrest_id",
  middleware.stripToken,
  middleware.verifyToken,
  controllers.UpdateNtrest
);
Router.delete(
  "/:ntrest_id",
  middleware.stripToken,
  middleware.verifyToken,
  controllers.DeleteNtrest
);

module.exports = Router;
