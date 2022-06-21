import { Link } from 'react-router-dom';
import '../css/login.css';

export default function Login() {
    return (
        <div>

            <div className="login-form-area">
                <div className="login-form">

                    <div className="login-heading">
                        <span>Login</span>
                        <p>Enter Login details to get access</p>
                    </div>

                    <div className="input-box">
                        <div className="single-input-fields">
                            <label>Username or Email Address</label>
                            <input type="text" placeholder="Username / Email address"/>
                        </div>
                        <div className="single-input-fields">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                    </div>

                    <div className="login-footer">
                        <p>Don’t have an account? <Link to="/register">Sign Up</Link> here</p>
                        <button className="submit-btn3">Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
