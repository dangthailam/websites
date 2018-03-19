const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    address: String,
    title: String,
    description: String,
    category: Number,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;