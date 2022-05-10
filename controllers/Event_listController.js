////////////////////imports//////////////////
const { Event_List } = require("../models");

////////////////////controller variables//////////////////

const getAllEvent_Lists = async (req, res) => {
  try {
    const getEvent_Lists = await Event_List.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(getEvent_Lists);
  } catch (error) {
    throw error;
  }
};
////////////////////exports//////////////////

module.exports = {
  getAllEvent_Lists,
 
};