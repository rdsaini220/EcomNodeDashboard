import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header, Sidebar, NavigationBar, Footer } from "../index";
import { useWindowDimension } from "../../features";

const Layout = ({ children }) => {
    const [show, setShow] = useState(false);
    
    // get screen width custom function
    const { width } = useWindowDimension();
    useEffect(() => {
        if(width > 767){
            setShow(true)
        }
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let location = useLocation();
    return (
        <div className="wrapper">
            <Sidebar handleClose={handleClose} show={show} />
            <div className="content-wrapper">
                <Header handleShow={handleShow}/>
                <NavigationBar location={location} />
                <div className="container-fluid py-3 px-lg-4">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default Layout;
