import React, { useState } from "react";
import API from "../utils/API";
import BookCard from "../BookCard";
import "../assets/css/style.css";

function Search() {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    

    function handleInputChange(event) {
        const { value } = event.target;
        setSearch(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.searchBooks(search)
            .then((res)=> setBooks(res.data.items))
    }

    function saveToDB(event) {
        const book = JSON.parse(event.target.getAttribute("book"));
        console.log(book);
        API.saveBook(book)
    }


    return (
        <article>
            <h1>Search</h1>
            <form>
                <input
                    value={search}
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleSubmit}
                >Search</button>
            </form>
            <section>
                {books.map(
                    book=> <BookCard volumeInfo={book.volumeInfo} save={saveToDB} search={true}/>
                )}
            </section>
        </article>
    )
}

export default Search;