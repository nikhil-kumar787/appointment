const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const appointmentRoutes = require("./routes/Appointment");
env.config();

try {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
 console.log(`MongoDB Connected`);
} catch (err) {
console.error(err);
process.exit(1);
}

app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.use("/appointment", appointmentRoutes);

const PORT = process.env.PORT 

app.listen(PORT, console.log(`Server is running on port ${PORT}`));