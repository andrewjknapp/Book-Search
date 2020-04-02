import React from "react";

function BookCard(props) {

    const {title, authors, description, imageLinks, infoLink} = props.volumeInfo;
    const book = {
        title, authors, description, imageLinks, infoLink
    }

    return (
        <section>
            <img src={imageLinks.thumbnail ? imageLinks.thumbnail : null} alt="Book Cover"/>
            <h2>{title}</h2>
            <p>{authors ? authors.join(", "): null}</p>
            <p>{description}</p>
            <a href={infoLink} target="_blank" rel="noopener noreferrer">More Info</a> 
            <button onClick={props.save} book={JSON.stringify(book)}>Save Book</button>
            <br/>  
            <br/>
        </section>
    )
}

export default BookCard;