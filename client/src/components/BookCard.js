import React from "react";

function BookCard(props) {

    const {title, authors, description, imageLinks, infoLink} = props.volumeInfo;
    const book = {
        title, authors, description, imageLinks, infoLink
    }
    let id = "";
    if(props.volumeInfo._id) {
        id = props.volumeInfo._id;
    }

    return (
        <section>
            <img src={imageLinks.thumbnail ? imageLinks.thumbnail : null} alt="Book Cover"/>
            <h2>{title}</h2>
            <p>{authors ? authors.join(", "): null}</p>
            <p>{description}</p>
            <a href={infoLink} target="_blank" rel="noopener noreferrer">More Info</a> 
            <button onClick={props.save} id={id} book={JSON.stringify(book)}>{props.search ? "Save Book" : "Delete Book"}</button>
            <br/>  
            <br/>
        </section>
    )
}

export default BookCard;