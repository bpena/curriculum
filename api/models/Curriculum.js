const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Curriculum
let CurriculumSchema = new Schema(
    {
        firstname: { type: String },
        lastname: { type: String },
        email: { type: String },
        phone: { type: String },
        address: { type: String },
    },
    {
        collection: 'curriculum'
    });

module.exports = mongoose.model('Curriculum', CurriculumSchema);