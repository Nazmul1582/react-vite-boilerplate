import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-10 bg-blue-100">
            <nav className="container mx-auto">
                <ul className="flex justify-center items-center gap-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;