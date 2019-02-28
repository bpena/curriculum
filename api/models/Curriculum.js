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
        summary: { type: String },
        degrees: { type: Array, "default": [] },
        jobs: { type: Array, "default": [] },
        skills: { type: Array, "default": [] },
        hobbies: { type: Array, "default": [] },
        networks: { type: Array, "default": [] }
    },
    {
        collection: 'curriculum'
    });

module.exports = mongoose.model('Curriculum', CurriculumSchema);