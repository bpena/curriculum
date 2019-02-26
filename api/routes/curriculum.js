const express = require('express');
const app = express();
const curriculumRoutes = express.Router();

let CurriculumModel = require('../models/Curriculum');

curriculumRoutes.route('/curriculum')
    .get((req, res) => {
        CurriculumModel.find((err, curriculum) => {
            if (err)
                console.log(err);
            else
                res.json(curriculum).end();
        });
    })
    .post((req, res) => {
        let curriculum = new CurriculumModel(req.body);
        curriculum.save()
            .then(curriculum => {
                res.status(200)
                    .json({'curricululm': 'curriculum is added successfully'})
                    .end();
            })
            .catch(err => {
                res.status(400)
                    .send('unable to save to database');
            });
    });

curriculumRoutes.route('/curriculum/:id')
    .get((req, res) => {
        let id = req.params.id;
        CurriculumModel.findById(id, (err, curriculum) => {
            res.json(curriculum);
        });
    })
    .put((req, res) => {
        let id = req.params.id;
        CurriculumModel.findById(id, (err, curriculum) => {
            res.json(curriculum);
        });
    })
    .delete((req, res) => {
        let id = req.params.id;
        CurriculumModel.findByIdAndRemove({ _id: id}, (err, curriculum) => {
            if (err) res.json(err);
            else res.json(curriculum);
        });
    });

module.exports = curriculumRoutes;