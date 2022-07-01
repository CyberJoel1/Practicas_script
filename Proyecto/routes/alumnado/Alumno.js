var express = require('express');
var router = express.Router();
const { getAlumno, createAlumno} = require('../../controller/Alumnado/Alumno');




router
    .route('/')
    .get(getAlumno)
    .post(createAlumno)

module.exports = router;