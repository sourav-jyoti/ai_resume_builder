const mongoose = require("mongoose");


const Schema = mongoose.Schema;
//no need to import objectId as we are not using it in schema


const ResumeSchema = new Schema({
  //personnel detail 
  title: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  themeColor: {
    type: String,
    trim: true,
    default: "red",
  },

  //summery
  summery:{
    type: String,
    trim: true,
    default:" ",
  },

  //experience
  experience: [
    {
      id: { type: Number },
      title: { type: String },
      companyName: { type: String },
      city: { type: String },
      state: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      currentlyWorking: { type: Boolean },
      workSummery: { type: String }
    }
  ],

  //education

  education: [
    {
      id: { type: Number },
      universityName: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      degree: { type: String },
      major: { type: String },
      description: { type: String }
    }
  ],

  //skills
  skill: [
    {
      name :{type:String},
    }
  ]
});



//module.exports = mongoose.model('Resume', ResumeSchema);

const ResumeModel = mongoose.model('Resume', ResumeSchema);

module.exports = { ResumeModel: ResumeModel };

{/**
When to use trim: true:
It automatically removes extra spaces at the beginning and end of strings when saving to MongoDB.
Use it for fields that:
Store user input (e.g. name, email, phone, address)
Are used for searching/filtering
Should not have leading/trailing spaces
*/}
