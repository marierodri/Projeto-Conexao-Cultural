const UsersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllUsers = async (req, res) => {
  try {
    
    const allUsers = await UsersModel.find().select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
////////
const addNewUser = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(401).send("Você não passou as informações de autorização.");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Acesso não autorizado.");
      }

      const { username, age, interests, email, password } = req.body;

      const existingUser = await UsersModel.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: "Nome de usuário já existente." });
      }

      const newUser = new UsersModel({
        username,
        age,
        interests,
        email,
        password
      });

      const savedUser = await newUser.save();
      res.status(201).json({ message: "Novo usuário registrado com sucesso!", savedUser });
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Não foi possível registrar o usuário, tente novamente mais tarde.",
    });
  }
};

/////////
const getUserById = async (req, res) => {
  try {
    const getUser = await UsersModel.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: "Usuário não encontrado." });
  }
};
/////////
const attUser = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(401).send( "Você não passou as informações de autorização.")
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token,SECRET,async function(err){
      if (err) {
        return res.status(403).send("Acesso não autorizado.")
      }
    })

    const { username, age, interests, email, password } = req.body;
    const userId = req.params.id

    const existingUser = await UsersModel.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    existingUser.username = username;
    existingUser.age = age;
    existingUser.interests = interests;
    existingUser.email = email;
    existingUser.password = password;

    const updateUser = await existingUser.save()
      res.status(200).json({ message: "Usuário atualizado com sucesso!", updateUser })
    
  } catch (error) {
    res.status(500).json({ message: "Não foi possível atualizar o usuário" });
  }
};
////////
const updateUserEmail = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(401).send("Você não passou as informações de autorização.");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Acesso não autorizado.");
      }
    
      const { email } = req.body;
      const userId = req.params.id;

      const updateEmail = await UsersModel.findByIdAndUpdate(userId, { email }, { new: true });
    
      res.status(200).json({ message: "Email do usuário atualizado com sucesso!", updateEmail });
    });
  } catch (error) {
    res.status(500).json({ message: "Não foi possível atualizar o email, tente novamente mais tarde." });
  }
};
//////////
const deleteUser = async (req, res) => {
 try {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("Você não passou as informações de autorização.")
  }
  const token = authHeader.split(" ")[1]
  jwt.verify(token, SECRET, async function(err){
    if (err) {
      return res.status(403).send("Acesso não autorizado.")
    }
  })

  const {id} = req.params
  const findUser = await UsersModel.findByIdAndDelete(id)
  if (findUser == null) {
    return res.status(404).json({message: `O usuário com ID ${id} não foi encontrado.`})
    
  }
  res.status(200).json({message: `O usuário com ID ${id} foi deletado com sucesso!`})
 } catch (error) {
  res.status(500).json({message: error.message})
 }
};

module.exports = {
  findAllUsers,
  addNewUser,
  getUserById,
  attUser,
  updateUserEmail,
  deleteUser
};
