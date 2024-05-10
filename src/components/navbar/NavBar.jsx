import Links from "./links/Links";
import "./NavBar.css"

const NavBar = () => {
    return ( 
    <div className="navbar-section">
        <div className="navbar-container">
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="navbar-links">
                <Links />
            </div>
        </div>
    </div>
 );
}
 
export default NavBar;