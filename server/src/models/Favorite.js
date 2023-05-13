const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.STRING,
         // validate: {
         //    isIn: [['Alive', 'Dead', 'unknown']]
         // }
      },
      species: {
         type: DataTypes.STRING,
      },
      gender: {
         type: DataTypes.STRING,
         // validate: {
         //    isIn: [['Male', 'Female', 'Genderless', 'unknown']]
         // }
      },
      origin: {
         type: DataTypes.STRING,
      },
      image: {
         type: DataTypes.STRING,
      }
   }, { timestamps: false });
};
