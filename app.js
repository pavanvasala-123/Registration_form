const express = require("express");

const app = express();
// const sequelize = require("./DbConnection");
const DbConnection = require('./DbConnection')
const cors = require("cors");


const userRegister = require("./Routes/register");
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", userRegister);

// async function Createconnection() {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync({ alter: true });
//     // await User.sync({ alter: true })
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
// Createconnection();

DbConnection();

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("listening to the port " + 3000);
});
