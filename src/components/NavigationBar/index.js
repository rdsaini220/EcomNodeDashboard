import { NavLink } from "react-router-dom";
import {
    Breadcrumb
} from "react-bootstrap";

const NavigationBar = ({ location }) => {
    let route = location.pathname.split('/')
                .slice(1).map(route => route.split('-').join(' '));
    return (
        <section className="navigation-bar py-3 border-bottom">
            <div className="container-fluid px-lg-4">
                <div className="row align-content-center">
                    <div className="col-lg-6 d-flex align-content-center">
                        <h2 className="text-capitalize">
                           {
                                route[0] !== '' ? route[0] : 'Dashboard'
                           } 
                        </h2>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end align-content-center">
                        {
                            route[0] !== '' ?
                                <Breadcrumb>
                                    <li className="breadcrumb-item">
                                        <NavLink exact={'true'} to={'/dahsboard'}> dashboard </NavLink>
                                    </li> 
                                    {
                                        route.length > 0 && route.map((item, ind) => {
                                            let middlewareUrl = "/" + location.pathname.split("/").slice(1, ind + 2).join("/");
                                            return (
                                                <>
                                                    {
                                                        route.length === ind + 1 ? 
                                                            <li className="breadcrumb-item" key={ind}>
                                                                {item}
                                                            </li> : 
                                                            <>  
                                                                <li className="breadcrumb-item" key={ind}>
                                                                    <NavLink exact={'true'} to={middlewareUrl} key={ind}> {item} </NavLink>
                                                                </li>
                                                            </>
                                                    }
                                                    
                                                </>
                                            )
                                        })
                                    }                                    
                                </Breadcrumb>
                            :''
                        }                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavigationBar;
