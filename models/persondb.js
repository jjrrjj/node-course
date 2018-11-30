const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name : String,
    age : Number,
    location : String
})

mongoose.model('person',PersonSchema);

//moduls.exports = personModel;