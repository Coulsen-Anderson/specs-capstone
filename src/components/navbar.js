import {Link} from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Toon Boon</Link>
        <ul>
            
                <CustomLink to="/home">Home</CustomLink>
            
            
                <CustomLink to="/create-post">Create Post</CustomLink>
            
            
                <CustomLink to="/saved-posts">Saved Posts</CustomLink>
            
            
                <CustomLink to="/auth">Login</CustomLink>
            
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