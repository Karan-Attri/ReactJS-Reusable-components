import React, { Component } from 'react';
import './LoginPage.css'
class LoginPage extends Component{
    _handleFormSubmit = () => {
        const userCredentials = {
            username: this.username.value,
            password: this.password.value,
        };
    }
    _handleShowHidePassword = event => {
        event.preventDefault();
        this.password.type = this.password.type === 'password' ? 'text' : 'password';
    }
    render(){
        return(
            <main className="hcl-login-page" id="main">
                <div className='hcl-login-top'>
                <h1  className="hcl-login-page-top-container-context">HCL Login Page</h1>
                </div>
                <div className='hcl-login-bottom'></div>
                <div className='hcl-login-form-container'>
                        <div className='hcl-login-form-icon'>
                        <span className="hcl-login-sprite-user-login" />
                        </div>
                        <div className='hcl-login-form'>
                        <form onSubmit={this._handleFormSubmit}
                            action="javascript:void(0);" title="Login Form">
                            {/* usename */}
                            <div className='formpage-group'>
                            <label htmlFor="hcl-login-form-username">Username</label>
                            
                            <input type='text' placeholder='Username' 
                             name="username" id="hcl-login-form-username" className="formpage-control"
                            title="Username"  autoComplete="off"
                            required/>
                            
                            </div>
                            {/* password */}
                            <div className='formpage-group hcl-login-form-password-container'>
                            <label htmlFor="hcl-login-form-password">Password</label>
                            
                            <input type="password" name="password" id="hcl-login-form-password"
                                    className="formpage-control" title="Password" placeholder="Password" required/>
                                    </div>
                            
                            <div className="checkbox">
                                <label className="hcl-login-form-rememberme">
                                    <input type="checkbox" name="rememberMe"
                                        ref={rememberMe => { this.rememberMe = rememberMe; }}
                                        title="Remember me" defaultChecked
                                    />
                                    &nbsp; Remember me
                                </label>
                                <label className="hcl-login-form-forgot-password pull-right">
                                </label>
                            </div>
                            <div className="hcl-login-form-submit-icon">
                                <button className="hcl-login-form-submit-icon" type="submit" title="Submit">
                                    <span className="hcl-login-sprite-form-submit-btn" />
                                </button>
                            </div>
                        </form>
                        </div>
                </div>
            </main>
        )
    }
}
export default LoginPage;