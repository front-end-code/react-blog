import { React}  from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="p-3 bg-black">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="text-info">The Blog website</h1>
                <div className="links">
                    <Link to="/" className="text-info text-decoration-none">Home</Link>
                    <Link to="/create" className="text-info ms-3 text-decoration-none hover:text-red">New Article</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;