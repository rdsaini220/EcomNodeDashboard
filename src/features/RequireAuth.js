import React, { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'

import { Layout } from '../components';


const RequireAuth = ({ component: Component }) => {
    const [isLogin, setIsLogin ] = useState(false)
    let isToken = useSelector((state) => state.auth.isToken)
    let location = useLocation();
    const authToken = Cookies.get('authToken')
    console.log('test', isToken)
    useEffect(() => {
        if (isToken){
            setIsLogin(true)
        }
    }, [isToken])
    return (authToken ? <Layout><Component /></Layout> : <Navigate to="/login" state={{ from: location }} replace />)
 }

export default memo(RequireAuth);