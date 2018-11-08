import React, {Component} from 'react';
import './Auth.css';

class Auth extends Component {

    
    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
        window.location = `http://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render() {
        return(
            <section className='auth-page'>
                <div className="Header-Auth" id="Auth">
                    <h1 className='auth-title'>idigyo / Words</h1>
                    <div className="button-box">
                        <button id="darkbuttons" onClick={this.login}> Login </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Auth;