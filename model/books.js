const mongoose = require('mongoose');


const BooksDirectorySchema = new mongoose.Schema({
    book: {
        type: String,
        required: true,
        trim:true
    },
    publisher: {
        type: String,
        required: true,
        trim:true
    },
    pages: {
        type: Number,
        required:true  
    },
    completed: {
        type: Boolean,
        default:false
   }
});


module.exports = mongoose.model('Books', BooksDirectorySchema)