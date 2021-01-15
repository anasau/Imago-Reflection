const express = require('express'); 
const router = express.Router();

const ReflectionDb = require('../controller/controller'); 

//for this router - run these functions 
router.get('/', ReflectionDb.getAll);

router.post('/', ReflectionDb.postOne);

// router.delete('/delete/:id', postsDb.delete);

// router.put('/submit/:id', ReflectionDb.update )


module.exports = router; 




// router.post('/post/title', topics.postOne);
