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
        <section className="bookCard">
            <div className="image">
                <img src={imageLinks.thumbnail ? imageLinks.thumbnail : null} alt="Book Cover"/>
            </div>
            <h2>{title}</h2>
            <p className="authors">{authors ? authors.join(", "): null}</p>
            <p>{description}</p>
            <div className="infoLink">
                <a href={infoLink} target="_blank" rel="noopener noreferrer">More Info</a> 
            </div>
            <button className="bookBtn" onClick={props.save} id={id} book={JSON.stringify(book)}>{props.search ? "Save Book" : "✖️"}</button>
        </section>
    )
}

export default BookCard;