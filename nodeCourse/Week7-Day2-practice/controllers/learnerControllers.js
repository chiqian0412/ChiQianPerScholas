// const express = require('express');


// Refactor route controllers
// This controller is to get all learners
exports.getAllLearners = (req,res) => {
    res.status(500).json({
        suatus: "fail",
        data:{
            message: "undefined routes",
        }
    })
}
// This controller is to create a new learner
exports.createLearner = (req, res) => {
    res.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  }
// This controller is to get a single learner
  exports.getSingleLearner = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
        message: "undefined routes",
        },
    });
    }
// This controller is to update learner
  exports.updateLearner = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
        message: "undefined routes",
        },
    });
    }
// This controller is to delete learner
  exports.deleteLearner = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
        message: "undefined routes",
        },
    });
    }

