////////////////////imports//////////////////
const { Event_List, User } = require("../models");

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

const getAllevent_listByuserPk = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const Event_ListDetails = await Event_List.findAll({
      where: { userId: userId },
      include: [{ model: User }],
    });
    res.send(Event_ListDetails);
  } catch (error) {
    throw error;
  }
};

const CreateEvent_List = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let event_listBody = {
      userId,
      ...req.body,
    };
    const newEvent_list = await Event_List.create(event_listBody);
    res.send(newEvent_list);
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  getAllEvent_Lists,
  getAllevent_listByuserPk, 
  CreateEvent_List,
 
};