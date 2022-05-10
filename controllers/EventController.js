/////////////////////imports//////////////////
const { Event, Ntrest } = require("../models");

////////////////////controller variables//////////////////

const getAllEvents = async (req, res) => {
  try {
    const getEvents = await Event.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(getEvents);
  } catch (error) {
    throw error;
  }
};

const GetEventDetails = async (req, res) => {
  try {
    const eventId = parseInt(req.params.eventid);
    const EventDetails = await Event.findOne({
      where: { eventId: eventId },
      include: [{ model: Event }],
    });
    res.send(EventDetails);
  } catch (error) {
    throw error;
  }
};

const GetAlleventsByNtrestPk = async (req, res) => {
  try {
    const ntrestId = parseInt(req.params.ntrest_id);
    const EventDetails = await Event.findAll({
      where: { ntrestId: ntrestId },
      include: [{ model: Ntrest }],
    });
    res.send(EventDetails);
  } catch (error) {
    throw error;
  }
};

const newEvent = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let ntrestId = parseInt(req.params.ntrest_id);
    let eventBody = {
      userId,
      ntrestId,
      ...req.body,
    };
    let createEvent = await Event.create(eventBody);
    res.send(createEvent);
  } catch (error) {
    throw error;
  }
};

const UpdateEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.event_id);
    let updatedEvent = await Event.update(req.body, {
      where: { id: eventId },
      returning: true,
    });
    res.send(updatedEvent);
  } catch (error) {
    throw error;
  }
};

const DeleteEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.event_id);
    await Event.destroy({ where: { id: eventId } });
    res.send({ message: `Event with id ${eventId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  getAllEvents,
  GetEventDetails,
  GetAlleventsByNtrestPk,
  newEvent,
  UpdateEvent,
  DeleteEvent,
};
