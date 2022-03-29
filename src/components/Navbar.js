import { Link } from "react-router-dom";   

export function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="navbar">
          <Link className="navbar-brand" to="/">
          <h1>LAB - WikiCountries</h1>
          </Link> 
          </div>
          </nav>
    );
};