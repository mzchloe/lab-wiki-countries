import { Link } from "react-router-dom";   

export function Navbar() {
    return (
        <div className="navbar">
          <Link className="navbar-brand" to="/">
          <h1>LAB - WikiCountries</h1>
          </Link> 
          </div>
    );
};