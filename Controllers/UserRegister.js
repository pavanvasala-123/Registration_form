const Register = require('../Models/userRegister')




const GetRegisteredUsers = async(req,res) =>{
    const users = await Register.findAll({})
    res.json(users)
}

const downloadResume =  (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Set appropriate headers for a .docx file
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

        // Pipe the file stream to the response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        res.status(404).send("File not found");
    }
}
module.exports = {GetRegisteredUsers,downloadResume}