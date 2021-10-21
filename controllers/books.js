const Books = require('../model/books');



const getBooks = async (req, res) => {
    try {
        const books = await Books.find({});

        res.status(200).json({ books });

     } catch (error) {
        console.log(error);
    }
}

const addBook = async (req, res) => {
    try {
        const addbook = await Books.create(req.body)

        res.json({ addbook })
        
    } catch (error) {
        console.log(error);
    }
}

const getBook = async (req, res) => {
    try {
        const {id:bookID} = req.params
        const book = await Books.findById({ _id: bookID });
        
        res.json({ book });
    } catch (error) {
        console.log(error);
    }
}


const updateBook = async (req, res) => {
    try {
        const { id: bookID } = req.params
        const book = await Books.findByIdAndUpdate({ _id: bookID },req.body)
        
        res.json({ book });
    } catch (error) {
        console.log(error);
    }
}


const deleteBook = async (req, res) => {
    try {
        const { id: bookID } = req.params
        const book = await Books.findByIdAndDelete({ _id: bookID })
        
        res.json({book})
    } catch {
        console.log(error);
    }
}


const deleteAllBooks = async (req, res) => {
    try {
        const books = await Books.deleteMany();

        res.json({ books });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    deleteAllBooks,
    getBook
}