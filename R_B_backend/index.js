require('dotenv').config();//required to access the info in .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const { ResumeModel } = require("./db");

const app = express();

//midlleware allowing 5173
app.use(cors({
  origin: "http://localhost:5173", // Allow only frontend
  methods: "GET,POST,PUT,DELETE",
}));

// Middleware to parse JSON request body
app.use(express.json());


async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.Mongo_url);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
  }
}

connectToDatabase();




//router endpoints

//a new resume is created using title and time of creation

app.post("/user/resumes", async function (req, res) {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newResume = await ResumeModel.create({ title });

    res.status(201).json({ _id: newResume._id });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//fetched using id to edit the resume
app.get("/user/resumes/:id", async (req, res) => {
  try {

    const resume = await ResumeModel.findById(req.params.id);
    //GET /user/resumes/12345 nodejs extracts 12345 from the url and params is responsible for it
    if (!resume) return res.status(404).json({ error: 'Resume not found' });

    res.json(resume);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//updated the resume with data
app.put("/user/resumes/:id", async function (req, res) {
  try {
    const updateData = req.body;

    // Check if the resume exists first
    const existingResume = await ResumeModel.findById(req.params.id);
    if (!existingResume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    // Update the existing resume
    const updatedResume = await ResumeModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData},//dynamically adds key value pair based on the frontend data
      { new: true }
    );

    res.status(200).json({ message: "Resume updated successfully", updatedResume });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


//dashboard gets all resumes
app.get("/resumes", async function (req, res) {
  
  try {
    const resumes = await ResumeModel.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
})


app.listen(3000);




/**write line 22-24 in vanilla style
 
mongoose.connect(process.env.Mongo_url)
  .then(() => console.log("MongoDB connected"))                  //conditions if failed to connect db error 
  .catch((err) => console.error("MongoDB connection error:", err));


 */