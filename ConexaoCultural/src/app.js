require("dotenv").config();
const express = require("express")
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const usersRoutes = require("./routes/usersRoutes");
const activitiesRoutes = require("./routes/activitiesRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/api/users", usersRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/admins", adminRoutes)

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json')

app.use('/minha-rota-de-documentacao', swaggerUI.serve, swaggerUI.setup(swaggerFile))

module.exports = app