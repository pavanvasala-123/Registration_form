const express = require("express");
const {GetRegisteredUsers,downloadResume} = require("../Controllers/UserRegister");
const multer = require("multer");
const path = require("path");
const Register = require("../Models/userRegister");

const router = express.Router();

router.get("/getusers", GetRegisteredUsers).get("/download/:filename", downloadResume);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("resume"), async (req, res) => {
  try {
    const { name, dob, gender, hobbies, state, address } = req.body;

    let resumePath = null;

    if (req.file) {
      resumePath = req.file.path;
      console.log(resumePath);
    } else {
      res.json("This field is required");
    }
    console.log(resumePath);

    // Save form data to database (using Sequelize or other ORM)
    // const registration = await Register.create({
    //   name,
    //   dob,
    //   gender,
    //   hobbies,
    //   state,
    //   address,
    //   resume: resumePath, // Use resumePath if file was uploaded, otherwise null
    // });

    const userRegistration = new Register({
      name,
      dob,
      gender,
      hobbies,
      state,
      address,
      resume: resumePath,
    });
    await userRegistration.save();

    res.status(201).json(userRegistration);
  } catch (error) {
    console.error("Error saving registration:", error);
    res.status(500).json({ error: "Failed to save registration" });
  }
});

router.post("/getuser", (req, res) => {
  res.json("get user");
});
module.exports = router;
