const activitiesModel = require("../models/activitiesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllActivities = async (req, res) => {
  try {
    const allActivities = await activitiesModel.find();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findActivityById = async (req, res) => {
  try {
    const findActivity = await activitiesModel.findById(req.params.id);
    res.status(200).json(findActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const addNewActivity = async (req, res) => {
  try {
    const authHeader = req.get("Authorization")
    if (!authHeader) {
      return res.status(401).send("Você não passou as informações de autorização.")
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token, SECRET, async function(err){
      if (err) {
        return res.status(403).send("Acesso não autorizado.")
      }
    })
    
    const { title, description, schedule, location, maxParticipants } =
      req.body;

    const newActivity = new activitiesModel({
      title,
      description,
      schedule,
      location,
      maxParticipants,
    });

    const savedActivity = await newActivity.save();
    res.status(201).json({ message: "Nova atividade registrada!", savedActivity });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const updateActivity = async (req, res) => {
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
  
    const { title, description, schedule, location, maxParticipants } =
      req.body;

    const updateActivity = await activitiesModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        schedule,
        location,
        maxParticipants,
      }
    );
    res.status(200).json({ message: "Atividade Atualizada", updateActivity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Não foi possível atualizar a atividade." });
  }
};

const updateLocation = async (req, res) => {
   try {
    const authHeader = req.get("Authorization")
    if (!authHeader) {
      return res.status(401).send("Você não passou as informações de autorização")
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token, SECRET, async function(err){
      if (err) {
        return res.status(403).send("Acesso não autorizado.")
      }
    })
    
    const { location } = req.body
    const findLocation = req.params.id

    const updateLocation = await activitiesModel.findByIdAndUpdate(findLocation, {location}, {new: true});

    res.status(200).json({message: "Local atualizado com sucesso!", updateLocation})
   } catch (error) {
    res.status(500).json({message: "Não foi possível atualizar um local novo, tente novamente mais tarde"})
   }
}

const deleteActivity = async (req, res) => {
  try {
    const authHeader = req.get("Authorization")
    if (!authHeader) {
      return res.status(401).send("Você não passou as informações de autorização.")
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token, SECRET, async function(err){
      if (err) {
        return res.status(403).send("Acesso não autorizado.")
      }
    })
    
    const { id } = req.params;
    const deleteActivity = await activitiesModel.findByIdAndDelete(id);
    const message = `A atividade ${deleteActivity.title} foi deletada com sucesso.`;
    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllActivities,
  findActivityById,
  addNewActivity,
  updateActivity,
  updateLocation,
  deleteActivity,
};
