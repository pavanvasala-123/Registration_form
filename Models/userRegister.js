const {DataTypes } = require('sequelize');
const sequelize = require('../DbConnection')

  const Register = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   dob:{
    type:DataTypes.STRING,
    allowNull:false
   },
   gender:{
    type:DataTypes.STRING,
    allowNull:false

   },
   hobbies:{
    type:DataTypes.STRING,
    allowNull:false

   },
   state:{
    type:DataTypes.STRING,
    allowNull:false
   },
   address:{
    type:DataTypes.STRING,
    allowNull:false
   },
   resume:{
    type:DataTypes.STRING
   }
  });

module.exports = Register
