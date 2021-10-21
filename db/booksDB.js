const mongoose = require('mongoose');


const BooksDB = (url) => {
    return (mongoose.connect(url, {
        useNewUrlParser: true
    }))
}

module.exports = BooksDB;