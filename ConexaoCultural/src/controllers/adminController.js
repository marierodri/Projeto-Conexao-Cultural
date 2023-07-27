const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createAdmin = async (req, res) => {
  try {
    const senhacomHash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = senhacomHash;

    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email }).exec();

    if (!admin) {
      return res.status(404).json({ message: "Credenciais inválidas" });
    }

    const validPassword = bcrypt.compareSync(req.body.password, admin.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdmin = async (req, res) => {
    try {
        const {id} = req.params
        const findAdmin = await Admin.findByIdAndDelete(id)
        if (findAdmin == null) {
          return res.status(404).json({message: `A administradora com ID ${id} não foi encontrada.`})
          
        }
        res.status(200).json({message: `A administradora com ID ${id} foi deletada com sucesso!`})
       } catch (error) {
        res.status(500).json({message: error.message})
       }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  Login,
  deleteAdmin
};
