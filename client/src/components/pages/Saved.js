import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookCard from "../BookCard";
import "../assets/css/style.css";

function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(()=>{
        API.getSavedBooks()
            .then(res=>setSavedBooks(res.data));
    },[])

    function deleteBook(event) {
        const bookId = event.target.getAttribute("id");
        API.deleteBook(bookId);
    }

    return (
        <article className="savedContainer">
            <h1>Saved</h1>
            {savedBooks.map((book, i) => <div key={i}><BookCard volumeInfo={book} save={deleteBook} search={false}/></div>)}
        </article>
    )
}

export default Saved;