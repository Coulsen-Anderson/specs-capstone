import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Tune Share</Link>
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

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}