
// Database connection using sequelize orm for mysql

// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("users", "root", "pavan123", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false,
// });

// module.exports = sequelize;


// Database connection for mongodb

const mongoose = require('mongoose');
const URI = "mongodb+srv://pavanvasala:pavan123@cluster0.am1mgs0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const Dbconnection = async() => {
    try{
        await mongoose.connect(URI)
        console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
   
}

module.exports = Dbconnection;