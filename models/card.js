const mongoose = require ('mongoose');


const cardSchema = new mongoose.Schema({
    cardText: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Card', cardSchema);