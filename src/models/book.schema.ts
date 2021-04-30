const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
});

const Podcast = mongoose.model('Podcast', bookSchema);
module.exports = {Podcast};
