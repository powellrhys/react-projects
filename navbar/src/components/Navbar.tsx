import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="home-title">Home</Link>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}