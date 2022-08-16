import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; // alert notification container
import Cookies from 'js-cookie';

// Containers
import { RequireAuth } from './features';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import { requestLogin } from "./reduxStore/slice/auth";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/style.scss';

class App extends Component {
  render() {
    return (<>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="login" element={<Login/>} />
          <Route exact path="/" element={<RequireAuth component={Dashboard}/>} />          
          <Route exact path="products" element={<RequireAuth component={Products}/>} />          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      </>
    )
  }
}

export default App
