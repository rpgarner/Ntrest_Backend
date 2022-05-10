////////////////////imports//////////////////
const { Event, Event_List, User } = require("../models");

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

const GetEvent_listbyUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const UserEvent_lists = await Event_List.findAll({
      where: { userId: userId },
      include: [{ model: User }],
    });
    res.send(UserEvent_lists);
  } catch (error) {
    throw error;
  }
};

const getEvent_ListsDetails = async (req, res) => {
  try {
    const event_listId = parseInt(req.params.event_list_id);
    const event_listDetails = await Event_List.findByPk({
      where: { event_listId: event_listId },
    });
    res.send(CommentDetails);
  } catch (error) {
    throw error;
  }
};

const newEvent_list = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let postId = parseInt(req.params.post_id);
    let CommentBody = {
      userId,
      postId,
      ...req.body,
    };
    let createComment = await Comment.create(CommentBody);
    res.send(createComment);
  } catch (error) {
    throw error;
  }
};

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true,
    });
    res.send(updatedComment);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    await Comment.destroy({ where: { id: commentId } });
    res.send({ message: `Comment with id ${commentId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  getAllEvent_Lists,
  GetCommentDetails,
  GetAllCommentsByPostPk,
  newComment,
  UpdateComment,
  DeleteComment,
};