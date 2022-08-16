import { NavLink } from "react-router-dom";
import {
    Offcanvas,
    Nav
} from "react-bootstrap";
import LinkGroup from "../LinkGroup";
import Logo from '../../assets/images/logo.svg'

const options = [
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: false,
    },
];

const Sidbar = ({ handleClose, show }) => {
    return (
        <>
            {
                options.map((props, idx) => (
                    <Offcanvas className="main-sidebar show" show={show} onHide={handleClose} {...props} key={idx}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <NavLink to={'/'} className="d-flex align-items-center text-primary">
                                    <img src={Logo} className="img-fluid" alt="Brand Logo" />
                                    <h1 className="ms-3">Ecomy</h1>
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column sidebar-nav">
                                <LinkGroup
                                    url={"/"}
                                    name="Dashboard"
                                    iconName={'fa-solid fa-house'}
                                />
                                <LinkGroup
                                    url={"/products"}
                                    name="Products"
                                    iconName={'fa-brands fa-product-hunt'}
                                />
                                <LinkGroup
                                    url={"/orders"}
                                    name="Orders"
                                    iconName={'fa-solid fa-border-all'}                         
                                />
                                <LinkGroup
                                    url={"/blogs"}
                                    name="Blogs"
                                    iconName={'fa-solid fa-blog'}
                                    childrenLinks={
                                        [
                                            {
                                                name: 'Blog Add',
                                                url: '/blog-data/add',
                                            },
                                            {
                                                name: 'Blog List',
                                                url: '/blog/list',
                                            }
                                        ]
                                    }
                                />
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                ))
            }
        </>
    );
}

export default Sidbar;
