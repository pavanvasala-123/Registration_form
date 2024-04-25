// const {DataTypes } = require('sequelize');
// const sequelize = require('../DbConnection')

//   const Register = sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//    dob:{
//     type:DataTypes.STRING,
//     allowNull:false
//    },
//    gender:{
//     type:DataTypes.STRING,
//     allowNull:false

//    },
//    hobbies:{
//     type:DataTypes.STRING,
//     allowNull:false

//    },
//    state:{
//     type:DataTypes.STRING,
//     allowNull:false
//    },
//    address:{
//     type:DataTypes.STRING,
//     allowNull:false
//    },
//    resume:{
//     type:DataTypes.STRING
//    }
//   });

// module.exports = Register
const mongoose = require('mongoose');
const RegisterUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 dob:{
  type:String,
  required:true
 },
 gender:{
  type:String,
  required:true

 },
 hobbies:{
  type:String,
  allowNull:true

 },
 state:{
  type:String,
  required:true
 },
 address:{
  type:String,
  required:true
 },
 resume:{
  type:String
 }

})

const Register = mongoose.model("Register",RegisterUser)
module.exports = Register
