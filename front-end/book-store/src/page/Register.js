import '../css/register.css';

import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <div className="register-form-area">
                <div className="register-form text-center">

                    <div className="register-heading">
                        <span>Sign Up</span>
                        <p>Create your account to get full access</p>
                    </div>

                    <div className="input-box">
                        <div className="single-input-fields">
                            <label>Full name</label>
                            <input type="text" placeholder="Enter full name"/>
                        </div>
                        <div className="single-input-fields">
                            <label>User name</label>
                            <input type="text" placeholder="Enter email address"/>
                        </div>

                        <div className="single-input-fields">
                            <label>Birthday</label>
                            <input type="date" placeholder="Confirm Password"/>
                        </div> 

                        <div className="single-input-fields">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                        <div className="single-input-fields">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm Password"/>
                        </div>
                    </div>

                    <div className="register-footer">
                        <p> Already have an account? <Link to="/login"> Login</Link> here</p>
                        <button className="submit-btn3">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    );

}