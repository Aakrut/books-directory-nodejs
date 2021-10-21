const express = require('express');
const app = express()
require('dotenv').config()
const BooksRoute = require('./routes/books')
const BooksDB = require('./db/booksDB');
const notFound = require('./middleware/not-found');


app.use(express.json())

app.use('/api/v1/books', BooksRoute);

app.use(notFound)

const port = process.env.port || 3000;



const start = async () => {
    try {
    await BooksDB(process.env.MONGO_URI);
    app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})
    } catch (error) {
        console.log(error);
    }
}

start()