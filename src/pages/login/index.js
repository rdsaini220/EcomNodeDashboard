import React from "react"

import { LoginForm } from "../../components";
import loginImg from "../../assets/images/login.jpg";
import Logo from "../../assets/images/logo.svg";

const Login = () => {
  return (
    <aside className="login-page-sec">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-6 bg-light h-100 d-flex align-items-center justify-content-center">              
              <div className="row w-100">
                <div className="col-lg-7 mx-auto">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                      <img className="logo-login img-fluid" src={Logo} alt="login page" />
                      <h1>Ecomy</h1>
                  </div>
                  <div className="login-widget">
                      <div className="row align-items-center">
                        <div className="col-12">
                            <h1>Login</h1>
                            <div className="auth-info my-4">
                              This is a real app with Ecomy Dahsboard - use "admin@gmail.com / password" to login!
                            </div>
                        </div>
                      </div>
                      <LoginForm />
                  </div>
                </div>
              </div>
          </div>
          <div className="col-lg-6 bg-white h-100">
            <div>
              <img src={loginImg} alt="login page" />              
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Login
