import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth ();
    return (
        <div className="my-5 py-5">
            <div className="my-5 py-2">
                <div className="my-5 py-1">
                    <div className="my-5">
                        <h2>Please Login</h2> <br />
                        <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;