const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING(64),
         allowNull: false
      }
   }, { timestamps: false });
};
