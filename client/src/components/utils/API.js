//const baseQuery = `https://www.googleapis.com/books/v1/volumes?q=intitle:${book}`;
import axios from "axios";

export default {
    searchBooks: function(bookTitle) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}`)
    },
    saveBook: function(book) {
        return axios.post('/api/books', book);
    },
    getSavedBooks: function() {
        return axios.get('/api/books')
    },
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`)
    }
}