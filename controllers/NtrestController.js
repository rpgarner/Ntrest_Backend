////////////////////imports//////////////////

const { User, Ntrest, Event } = require("../models");

////////////////////controller variables//////////////////

const { Op, literal, fn, col } = require("sequelize");

// const GetPopularEvent = async (req, res) => {
//   try {
//     const popular = await Post.findAll({
//       order: [["likes", "DESC"]],
//       attributes: [
//         "id",
//         "description",
//         "likes",
//         "postName",
//         "releaseDate",
//         "images"[(fn("COUNT", col("comments.id")), "commentCount")],
//       ],
//       where: { likes: { [Op.gt]: 3 } },
//       include: [
//         { model: User, attributes: ["userName", "id"] },
//         { model: Comment, attributes: [] },
//       ],
//     });
//     res.send(popular);
//   } catch (error) {
//     throw error;
//   }
// };

// const GetRecentEvents = async (req, res) => {
//   try {
//     const recents = await Event.findAll({ order: [["createdAt", "DESC"]] });
//     res.json(recents);
//   } catch (error) {
//     throw error;
//   }
// };

const GetAllNtrests = async (req, res) => {
    try {
      const recents = await Ntrest.findAll({});
      res.json(recents);
    } catch (error) {
      throw error;
    }
  };

const GetNtrestDetails = async (req, res) => {
  try {
    const ntrestDetails = await Ntrest.findByPk(req.params.ntrestId);
    res.send(ntrestDetails);
  } catch (error) {
    throw error;
  }
};

const CreateNtrest = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let ntrestBody = {
      userId,
      ...req.body,
    };
    const newNtrest = await Ntrest.create(ntrestBody);
    res.send(newNtrest);
  } catch (error) {
    throw error;
  }
};

const UpdateNtrest = async (req, res) => {
  try {
    let ntrestId = parseInt(req.params.ntrest_id);
    let updatedNtrest = await Ntrest.update(req.body, {
      where: { id: ntrestId },
      returning: true,
    });
    res.send(updatedNtrest);
  } catch (error) {
    throw error;
  }
};

const DeleteNtrest = async (req, res) => {
  try {
    let ntrestId = parseInt(req.params.ntrest_id);
    await Ntrest.destroy({ where: { id: ntrestId } });
    res.send({ message: `Ntrest with id ${ntrestId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  
  GetAllNtrests,
  GetNtrestDetails,
  CreateNtrest,
  UpdateNtrest,
  DeleteNtrest,
};
