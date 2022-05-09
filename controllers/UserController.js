////////////////////imports//////////////////

const { User, Ntrest } = require("../models");

/////////For auth//////////////

const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, userName, about, picture } =
      req.body;
    let passwordDigest = await middleware.hashPassword(password);
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      lastName,
      userName,
      about,
      picture,
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const CheckSession = async (req, res) => {
  try {
  const { payload } = await res.locals
  res.send(payload);
  } catch (error) {
    throw error;
  }
}

////////////////////controller variables//////////////////

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserProfile = async (req, res) => {
  try {
    const userAndPosts = await User.findByPk(req.params.user_id, {
      include: [{ model: Ntrest, as: "ntrests" }],
    });
    res.send(userAndPosts);
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  GetProfiles,
  GetUserProfile,
  Login,
  Register,
  CheckSession
};
