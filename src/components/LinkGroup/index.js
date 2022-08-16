import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const LinkGroup = (props) => {
    const {
        url = "/",
        name = "",
        iconName = "",
        isActive = "",
        childrenLinks = [],
        target = '',
        exact = 'true'
    } = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            {
                childrenLinks.length === 0 ?
                    <li>
                        <NavLink
                            exact={exact}
                            to={url}
                            target={target}
                            className={`nav-link ${isActive}`}
                        >
                            <span className={'nav-icon'}>
                                <i className={iconName}></i>
                                {name}
                            </span>
                        </NavLink>
                    </li>
                :
                <>
                    <li>
                        <a href="#"
                            className={`nav-link ${isActive}`}
                            onClick={() => setOpen(!open)}
                        >
                            <span className={'nav-icon'}>
                                <i className={iconName}></i>
                                {name}
                            </span>
                            <i className={`fa-solid fa-chevron-${open ? 'down' : 'right'}`}></i>
                        </a>
                        <Collapse in={open}>
                            <ul className="ms-3">
                                {
                                    childrenLinks && childrenLinks.map((child, ind) => {
                                        const { name, url, iconName = 'fa-regular fa-circle' } = child;
                                        return (
                                            <NavLink
                                                exact={exact}
                                                to={url}
                                                target={target}
                                                className={`nav-link ${isActive}`}
                                                key={ind}
                                            >
                                                <span className={'nav-icon'}>
                                                    <i className={iconName}></i>
                                                    {name}
                                                </span>
                                            </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </Collapse>
                    </li>    
                </>

            }            
        </>
    );
}

export default LinkGroup;
