import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
 
    

    _handleFormSubmit = () => {
        const userCredentials = {
            username: this.username.value,
            password: this.password.value,
        };
        const rememberMe = this.rememberMe.value === 'on' ? true : false;
    }

    _handleShowHidePassword = event => {
        event.preventDefault();
        this.password.type = this.password.type === 'password' ? 'text' : 'password';
    }

    render() {
        return (
            <main className="kar-login-page" id="main"
                ref={mainContainerElm => { this.mainContainerElm = mainContainerElm; }}
            >
                <div className="kar-login-page-top-container">
                    <h1 className="kar-login-page-top-container-context">
                        kar Login Page
                    </h1>
                </div>
                <div className="kar-login-page-bottom-container" />
                <div className="kar-login-form-container">
                    <div className="kar-login-form-header-icon">
                        <span className="kar-login-sprite-user-login" />
                    </div>
                    <div className="kar-login-form">
                        <form onSubmit={this._handleFormSubmit}
                            action="javascript:void(0);" title="Login Form"
                        >
                            {/* Username Field */}
                            <div className="form-group">
                                <label htmlFor="kar-login-form-username">Username</label>
                                <input type="text" name="username" id="kar-login-form-username" className="form-control"
                                    title="Username" placeholder="Username" autoComplete="off"
                                    ref={usernameInput => { this.username = usernameInput; }} autoFocus required
                                />
                            </div>
                            {/* Password Field */}
                            <div className="form-group kar-login-form-password-container">
                                <label htmlFor="kar-login-form-password">Password</label>
                                <input type="password" name="password" id="kar-login-form-password"
                                    className="form-control" title="Password" placeholder="Password"
                                    ref={password => { this.password = password; }} required
                                />
                                {/* View Password Icon(i.e. Eye icon)*/}
                                <a className="kar-login-form-view-password" href="javascript:void(0);"
                                    title="View Password" onClick={this._handleShowHidePassword}
                                />
                            </div>
                        
                            <div className="checkbox">
                                <label className="kar-login-form-rememberme">
                                    <input type="checkbox" name="rememberMe"
                                        ref={rememberMe => { this.rememberMe = rememberMe; }}
                                        title="Remember me" defaultChecked
                                    />
                                    &nbsp; Remember me
                                </label>
                                <label className="kar-login-form-forgot-password pull-right">
                                </label>
                            </div>
                            <hr className="kar-login-form-separator" />
                            <div className="text-center">
                                <label htmlFor="kar-login-form-register"
                                    className="kar-login-form-register-context"
                                >
                                    Not yet registered?
                                </label>
                                <br />
                                
                            </div>
                            <div className="kar-login-form-submit-icon">
                                <button type="submit" title="Submit">
                                    <span className="kar-login-sprite-form-submit-btn" />
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