const  PostsDb= require ('../models/model'); 

exports.getAll = async (req, res) => { 


  try {
    const posts = await PostsDb.find(); 
    res.status =201; 
    res.send(posts);
  } catch (e) {
    res.sendStatus(500);
    res.send(e);
  }

};

exports.delete =  async (req, res ) =>  { 
  const {id}= req.params;
  try { 

    const post = await PostsDb.deleteOne({_id:id});
    res.send (post); 
    res.status =(204);  
  } catch (e) {
    res.send (e) ; 
    res.status(500); 
  }
}; 

exports.postOne =  async (req, res) => { 


  try {
    const post = await PostsDb.create({
      title: req.body.title, 
      vote:0, 
      timestamp:Date.now()
    });  
    res.status(200); 
    res.send (post);
  } catch (e) {
    res.sendStatus = 500;
    res.send(e); 
  }
};



// findbyidandupdate{
//   _id:id}, 
// { $inc: { dir === down?score: -1 : +1 } }
// {new:true}/// passing to the front end the updatete topic 


exports.upVote =  async (req, res) => { 

  const { id} = req.params;
  try {
    const post = await PostsDb.findByIdAndUpdate({_id:id}, 
      {$inc :{vote:+1}}, {new:true});  
    res.status(200); 
    res.send (post);
  } catch (e) {
    res.sendStatus = 500;
    res.send(e); 
  }
};

