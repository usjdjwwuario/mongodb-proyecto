const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const app = express();
const port = process.env.PORT ||  9000;


//midelwal
app.use(express.json());
app.use('/api', userRoutes)


//rutas
app.get("/", (req, res) => {
    res.send("hello world");  
});

//mongodb conexion 
mongoose.connect(
    process.env.MONGODB_URI)
    .then(() => console.log("conectado ala base de datos de mngo atlas"))
    .catch((error) => console.error(error))




app.listen(9000, () => console.log("server listning on port", port));