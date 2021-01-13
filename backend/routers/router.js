const express = require('express'); 
const router = express.Router();

const postsDb = require('../controller/controller'); 

//for this router - run these functions 
router.get('/posts', postsDb.getAll);

router.post('/post', postsDb.postOne);

router.delete('/delete/:id', postsDb.delete);

router.put ('/upvote/:id',postsDb.upVote )


module.exports = router; 




// router.post('/post/title', topics.postOne);
