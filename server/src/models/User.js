const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id:{
      //    typeof: DataTypes.UUID,
      //    defaultValue: DataTypes.UUIDV4,
      //    primaryKey: true,
      //    allowNull: false, //Es para que este campo no venga vacio.
      // }
      id: {
         typeof: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false, 
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         // validate: {
         //    isEmail: true
         // }
      }

   }, { timestamps: false });
};
