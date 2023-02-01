import React from 'react';
import './LoginPage.css';

const LoginForm = () => {
    return(
        <>
            <div className="login__form">
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
};

const LoginPage = () => {
    return(
        <>
            <div className="login__container">
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;