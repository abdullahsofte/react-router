import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
             <h2>Navber</h2>
            <nav>
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/users"> Users </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                
                </ul>
            </nav>
        </div>
    );
};

export default Header;