const express = require('express'); 
const router = express.Router();

const ReflectionDb = require('../controller/controller'); 

router.get('/', ReflectionDb.getAll);

router.post('/', () => console.log('hsjdhcbDJCS'))
router.put('/', ReflectionDb.update);


module.exports = router; 

