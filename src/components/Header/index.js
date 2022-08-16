import React from "react";
import { Container, Navbar, Nav, Dropdown,} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

import Search from "../Search";
import LinkGroup from "../LinkGroup";
import { requestLogout } from "../../reduxStore/slice/auth";
import userImg from "../../assets/images/user.png";

const Header = ({ handleShow }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    // logout function
    const handleLogout = () => {
        dispatch(requestLogout())
    }
    return (
        <header className="header-sec">
            <Navbar expand="lg" className="py-0">
                <Container fluid className="d-flex w-100 px-lg-4">
                    <Navbar.Toggle variant="btn" className="border-0" onClick={handleShow}>
                        <i className="fa-solid fa-bars"></i>
                    </Navbar.Toggle>
                    <Navbar className="w-100 m-navbar py-0">
                        <Nav className="me-auto d-none d-lg-block">
                            <Search />
                        </Nav>
                        <Nav className="d-flex">
                            <Dropdown>
                                <Dropdown.Toggle className="nav-link dropdown-btn h-72">      
                                    {
                                        Object.keys(user).length > 0 ? 
                                            <span className="user-img" title={user.name}>
                                            {
                                                    Object.keys(user.image) > 0 ?
                                                        <img src={user.image.url} alt="user image" />
                                                    : user.name[0]
                                                
                                            }
                                            </span>  
                                        : <span className="user-img">
                                                <img src={userImg} alt="user image" />
                                        </span>
                                    }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <LinkGroup
                                        url={"/profile"}
                                        name="Profile"
                                        iconName={'fa-regular fa-user'}
                                    />
                                    <LinkGroup
                                        url={"/settings"}
                                        name="Settings"
                                        iconName={'fa-solid fa-gear'}
                                    />
                                    <li>
                                        <button className="btn-none nav-link text-danger" onClick={() => handleLogout()}>
                                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i> Logout
                                        </button>
                                    </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
