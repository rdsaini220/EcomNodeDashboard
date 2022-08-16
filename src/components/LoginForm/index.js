import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import PasswordField from "../PasswordField";
import loginSchema from "./validate";
import { requestLogin } from "../../reduxStore/slice/auth";

const LoginForm = () => {
    // form handle 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(loginSchema),
    });
    const dispatch = useDispatch()  
    const navigate = useNavigate();
    // get token
    const authToken = Cookies.get('authToken')
    const { user, isToken, isSuccess, isError, message } = useSelector((state) => state.auth)
    // form submit function
    const onSubmit = data => {
        dispatch(requestLogin(data))
    }
    useEffect(() => {
        if (authToken) {
            navigate('/');
        }
        if(isError){
            toast.error(message, {
                position: "top-right",
                autoClose: 5000
            })
        }
        if (Object.keys(user).length !== 0 && isToken) {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000
            })        
            navigate('/');
        }
        
    }, [user, isToken, authToken, isSuccess, isError, message])
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="novalidate">
                <div className="form-group mb-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input {...register("email")} type="email" id="email" className="form-control" placeholder="Enter your email address" />   
                    <div className="form-text text-danger">{errors.email?.message}</div>                 
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <PasswordField {...register("password")} />
                    <div className="form-text text-danger">{errors.password?.message}</div>                                    
                </div>
                <div className="form-group mb-4 text-center">
                    <button type="submit" className="btn btn-primary w-50 fill-circle me-auto">Login</button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;
