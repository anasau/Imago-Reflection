const express = require('express'); 
const router = express.Router();

const ReflectionDb = require('../controller/controller'); 

router.get('/', ReflectionDb.getAll);

router.post('/', ReflectionDb.postOne);


router.put('/', ReflectionDb.update);


module.exports = router; 

