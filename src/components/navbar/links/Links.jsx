import "./Links.css"
import NavLink from "./NavLink/NavLink";

const Links = () => {

    const links = [
        {
            title : "Home",
            path : "/"
        },
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Contact",
            path : "/contact"
        },
        {
            title : "Blogs",
            path : "/blog"
        },
    ]

    const session = true;
    const isAdmin = true;

    return ( 
        <div className="links">
            {links.map((link => (
                <NavLink item = {link} key={link.id} />
            )))}
            { session ? (
                <>
                {isAdmin && 
                    <NavLink item = {{
                        title : "Admin",
                        path : "/admin"
                    }} />}
                    <button className="logout">Logout</button>
                </>
             ) : (
                <NavLink item = {{
                    title : "Login",
                    path : "/login"
                }} />
            ) }
        </div>
     );
}
 
export default Links;