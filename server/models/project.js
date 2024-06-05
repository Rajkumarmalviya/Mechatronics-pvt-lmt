const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const ProjectSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});
 
// Create model for todo
const Project =new mongoose.model('Project', ProjectSchema);

module.exports = Project;