import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/"><h1>Search</h1></Link>
            <Link to="/saved"><h1>Saved</h1></Link>
        </header>
    )
}

export default Header;