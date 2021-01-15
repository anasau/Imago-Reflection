const  ReflectionDb= require ('../models/model'); 

exports.getAll = async (req, res) => { 


  try {
    const reflection = await ReflectionDb.find(); 
    res.status =201; 
    res.send(reflection);
  } catch (e) {
    res.sendStatus(500);
    res.send(e);
  }

};

// exports.delete =  async (req, res ) =>  { 
//   const {id}= req.params;
//   try { 

//     const post = await ReflectionDb.deleteOne({_id:id});
//     res.send (post); 
//     res.status =(204);  
//   } catch (e) {
//     res.send (e) ; 
//     res.status(500); 
//   }
// }; 

exports.postOne =  async (req, res) => { 
  const {exercise1, exercise2, exercise3, exercise4, exercise5, exercise6,exercise7} = req.body;
  
  try {
    const reflection = await ReflectionDb.create({
      exercise1:exercise1, 
      exercise2:exercise2, 
      exercise3:exercise3, 
      exercise4:exercise4, 
      exercise6:exercise6, 
      exercise5:exercise5, 
      exercise7:exercise7,    
     });  

    res.status(200); 
    res.send (reflection);
  } catch (e) {
    res.sendStatus = 500;
    res.send(e); 
  }
};



// exports.update =  async (req, res) => { 

//   const { id,exercise1, exercise2, exercise3, exercise4, exercise5, exercise6,exercise7} = req.body;
//   try {
//     const exercise = await ReflectionDb.findByIdAndUpdate({id:id}, 
//       {exercise:input}, {new:true});  
//     res.status(200); 
//     res.send (exercise);
//   } catch (e) {
//     res.status(500);
//     res.send(e); 
//   }
// };

