import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookCard from "../BookCard";

function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(()=>{
        API.getSavedBooks()
            .then(res=>setSavedBooks(res.data));
    },[savedBooks])

    console.log(savedBooks);

    function deleteBook(event) {
        const bookId = event.target.getAttribute("id");
        API.deleteBook(bookId);
    }

    return (
        <article>
            <h1>Saved</h1>
            {savedBooks.map(book => <BookCard volumeInfo={book} save={deleteBook} search={false}/>)}
        </article>
    )
}

export default Saved;