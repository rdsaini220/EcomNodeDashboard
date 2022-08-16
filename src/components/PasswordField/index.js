import React from "react";
import { useState } from "react";

const PasswordField = React.forwardRef((props, ref) => {
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            <div className="group-field">
                <input ref={ref} {...props} type={passwordType} id="password" className="form-control" placeholder="Enter your password" />
                <button type="button" onClick={togglePassword} className="btn icon-btn" ><i className={`fa-solid fa-eye${passwordType === 'text' ? '-slash' : ''}`}></i></button>
            </div>
        </>
    );
})

export default PasswordField;
