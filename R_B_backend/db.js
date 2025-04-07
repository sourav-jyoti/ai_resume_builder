const mongoose = require("mongoose");


const Schema = mongoose.Schema;
//no need to import objectId as we are not using it in schema


const ResumeSchema = new Schema({
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
});



//module.exports = mongoose.model('Resume', ResumeSchema);

const ResumeModel = mongoose.model('Resume', ResumeSchema);

module.exports = { ResumeModel: ResumeModel };

