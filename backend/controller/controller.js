const Reflection = require('../models/model');
const User = require('../models/user-model')

exports.getAll = async (req, res) => {
  const { user } = req.params
  try {
    const reflection = await Reflection.find({});
    res.status = 201;
    res.send(reflection);
  } catch (e) {
    res.sendStatus(500);
    res.send(e);
  }

};


exports.postOne = async (req, res) => {
  const { exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, user } = req.body;
  try {
    const reflection = new Reflection({
      exercise1,
      exercise2,
      exercise3,
      exercise4,
      exercise6,
      exercise5,
      exercise7,
      user
    });
    await reflection.save();

    res.status(200).json({ success: true, data: reflection })
    // const user = await User.findById({_id: user._id})
    // console.log(
    //   user, 'user before push'
    // )
    // user.reflections.push(reflection);
    // console.log(
    //   user, 'user AFTER push'
    // )
    // await user.save();
    // console.log(user, 'user  ??/')

  } catch (e) {
    res.sendStatus = 500;
    res.send(e);
  }
};



exports.update = async (req, res) => {
  const { _id, exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7 } = req.body;
  try {
    const response = await Reflection.findByIdAndUpdate({ _id },
      { exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7 }, { new: true });
    res.status(200);
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};



//to do
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

