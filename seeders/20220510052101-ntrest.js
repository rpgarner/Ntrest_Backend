// "use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          postName: "Tamagotchi",
          releaseDate: "1990",
          description: "Best thing to have while waiting at the Dr.'s office.",
          images:
            "https://m.media-amazon.com/images/I/819ZUKGJraS._AC_SX425_.jpg",
          likes: 31,
          userId: 1,   
        },
   
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};