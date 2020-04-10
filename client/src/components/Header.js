import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/"><h1>Search Book</h1></Link>
            <Link to="/saved"><h1>Saved Books</h1></Link>
        </header>
    )
}

export default Header;