import {Link} from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Toon Boon</Link>
        <ul>
            <li>
                <CustomLink to="/home">Home</CustomLink>
            </li>
            <li>
                <CustomLink to="/create-post">Create Post</CustomLink>
            </li>
            <li>
                <CustomLink to="/saved-posts">Saved Posts</CustomLink>
            </li>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname 

    return(
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}