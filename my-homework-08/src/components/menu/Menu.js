import classes from './menu.module.css'

import{NavLink} from "react-router-dom"


function Menu () {

    return (
        <ul className={classes.menu}>
            <li>
                <NavLink to="/" className={classes.Link}>main page</NavLink>
            </li>
            <li> 
                <NavLink to="/about" className={classes.Link}>about Page</NavLink> 
            </li>
            <li>
                <NavLink to="/contacts" className={classes.Link}>contacts Page</NavLink>
            </li>
            <li>
                <NavLink to="/prortfolio" className={classes.Link}>prortfolio</NavLink>
            </li>
             <li>
                <NavLink to="/news" className={classes.Link}>news</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={classes.Link}>blogs</NavLink>
            </li>
        </ul>
    )
}

export default Menu;