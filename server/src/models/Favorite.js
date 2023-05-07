const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
