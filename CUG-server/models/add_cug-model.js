const { Schema, model } = require("mongoose");

const add_cugSchema = new Schema({
    service: {
      type: String,
    },
    description: {
      type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
      }
  });
  
  const  Add_cug =new model("add_cug",add_cugSchema);
  
  module.exports= Add_cug;