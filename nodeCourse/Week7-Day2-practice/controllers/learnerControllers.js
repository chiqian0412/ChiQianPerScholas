// const learner = require("../models/learnermodel");
const Learner = require("../models/learnermodel");


// Refactor route controllers
// This controller is to get all learners
exports.getAllLearners = async(req,res) => {
  try{
    //retrieve all the learners from our database.
    const learners = await Learner.find();
    // send response.
      res.status(200).json({
          suatus: "success",
          data:{
              learners: learners,
          }
      })
  }catch(error){
    res.status(500).json({
      status: "error",
      message: error,
    })
  }  
}
// This controller is to create a new learner
exports.createLearner = async(req, res) => {
  try{
    const newLearner =await Learner.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newLearner: newLearner,
      },
    });
  }catch(error){
    res.status(500).json({
      status: "error",
      message: error,
    })
  }
}
// This controller is to get a single learner
  exports.getSingleLearner = async(req, res) => {
    try{
      const learner = await Learner.findById(req.params.id)
      res.status(200).json({
          status: "success",
          data: {
          learner: learner,
          },
      });
    }catch(error){
      res.status(500).json({
        status: "error",
        message: error,
      })
    }
  }  
// This controller is to update learner
  exports.updateLearner = async(req, res) => {
    try{
      const updatedLearner = await Learner.findByIdAndUpdate(req.params.id,req.body,{new: true});
      res.status(201).json({
          status: "success",
          data: {
          updatedLearner: updatedLearner,
          },
      });
    }catch(error){
      res.status(500).json({
        status: "error",
        message: error,
      })
    }
  }
// This controller is to delete learner
  exports.deleteLearner = async(req, res) => {
    try{
      await learner.findByIdAndDelete(req.params.id);
      res.status(204).json({
          status: "success",
          data: {},
      });
    }catch(error){
      res.status(500).json({
        status: "error",
        message: error,
      })
    }
  }

