const mongoose = require('mongoose');
// create learner schema
const learnerSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:Number,
    },
    location:{
        type:String,
    },
    courses:{
        type:[String],
    }
})

const learner = mongoose.model("learner", learnerSchema);

module.exports = learner;